# Deploying on Render.com

With Render, you are going to deploy your server code to the world. Your production level application will automatically be deployed from the main branch. Your development branch will also be deployed and serve as a testing area to ensure your code is correct. As you check in code and open Pull Requests, you will be able to preview your deployed PR code before accepting it into your deployed branch!

1. Log Into your Render Account.
1. Create a new "Web Service":
   1. Connect to your Github repository.
   1. Name your Service `yourname-server-deploy-prod`.
   1. Choose `Node` as your runtime environment.
   1. Choose the "main" branch.
   1. Enter `npm install` as the "Build Command".
   1. Enter `npm start` as the "Start Command".
   1. Under Advanced
      1. select "yes" for "Auto-Deploy".
      1. Environment variables can be added with initial deployment
   1. Select "Create Web Service".
   1. Add "PR Preview" for you feature branches.
      1. Select "PRs" from the left side menu.
      1. Click "Enable Pull Request Previews".
1. Follow the same steps to deploy your `dev` branch:
   1. Create a New Web Service, connect to the same Github repository.
   1. Name your Service `yourname-server-deploy-dev`.
   1. Choose `Node` as your runtime environment.
   1. Choose the "dev" branch.
   1. Enter `npm install` as the "Build Command".
   1. Enter `npm start` as the "Start Command".
   1. Under Advanced
      1. select "yes" for "Auto-Deploy".
      1. Environment variables can be added with initial deployment
   1. Select "Create Web Service".
   1. Add "PR Preview" for you feature branches.
      1. Select "PRs" from the left side menu.
      1. Click "Enable Pull Request Previews".

Once your code is pushed to GitHub, your code will automatically deploy to your Render development environment.

When you open any Pull Request to your deployed branches, you should be able to preview the build on render before you accept changes into your deployed branch.
