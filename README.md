## 📦 The Organization of this repository:-

```
project-root/
├── docs/                  # Contains the fronend hosting files
│   └── index.html
├── render-backend/        # Contains the backend hosting files
│   ├── index.js
│   ├── package.json
│   └── readme.md
├── readme.md              # This file

```
## 🔧 First Start the Backend Server:-
We are hosting the backend server on "Render: Cloud Application Platform". How to do that?

- Go to [render](https://render.com/)
- Sign In using your GitHub credentials
- Add New "Web Service"
- Choose the "Public Git Repository" option
- Copy-paste your GitRepo (this) URL and click 'Connect'
- Set "Root Directory": "render-backend"
- Set "Build Command": "npm install"
- Set "Start Command": "npm start"
- Select "Instance Type": "Free"
- Click "Deploy Web Service"
  
After deployment finishes, you'll see you’ll get a public API URL like this:
`https://websitewithbackend.onrender.com`

## 🔧 Now How to Host the Frontend:-

First, edit the `index.html` kept inisde the "/docs" folder:-

  - Find the line: `const apiUrl = 'https://websitewithbackend.onrender.com/api/calculate';`
  - Replace the above URL with your actual backend API URL (see the previous step)
  - Note that `/api/calculate` must be there at the end of the URL (to know why see line no. 08 in `index.js` inside the "/render-backend" folder
  - Commit the changes

The frontend is hosted by GitHub. How to do that?

  - In the GitHub "Repository Settings", nevigate to: 'Code and automation' → 'Pages'
  -  Select Source: "Deploy from a branch"
  - Select Branch: "main"
  - Select folder: "/docs"
  - Click Save

The frontend will be deployed by GitHub. The URL of the deployed site will be displayed on the top of the above settings page.





