export const authConfig = {
    pages:{
        signIn:"/login",
    },
    providers:[],
    callbacks:{
        async jwt({token,user}){
            if(user){
                token.id = user.id;
                token.isAdmin = user.isAdmin;
            }
            return token;
        },
        async session({session,token}){
            if(token){
                session.user.id = token.id;
                session.user.isAdmin = token.isAdmin;
            }
            return session;
        },
        authorized({auth,request}){
            // return false;
            // console.log(auth)
            // return true;
            const user = auth?.user;
            // const isOnAdminPanel = request.nextUrl?.startsWith("/admin");
            const isOnAdminPanel = request.nextUrl?.pathname.startsWith("/admin");
            const isOnBlogPage = request.nextUrl?.pathname.startsWith("/blog");
            const isOnLoginPage = request.nextUrl?.pathname.startsWith("/login");

            // ONLY ADMIN CAN REACHED THE ADMIN DASHBOARD


            if (isOnAdminPanel && !user?.isAdmin) {
                return false;
              }


            // ONLY AUTHENDICATION USERS CAN REACHED THE BLOG PAGE


            if (isOnBlogPage && !user) {
                return false;
              }


             // ONLY AUTHENDICATION USERS CAN REACHED THE LOGIN PAGE

             if (isOnLoginPage && user) {
                return Response.redirect(new URL("/", request.nextUrl));
              }

              return true
        },
    },
};