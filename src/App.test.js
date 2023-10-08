import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
  //kjjkklmjhgnflfldk
});
/*
name: CI/CD

on:
  push:
    branches:
      - master

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
    - name: Checkout code
      uses: actions/checkout@v3

    - name: Set up Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'

    - name: Create env file
      run: |
        touch .env
        echo "${{ secrets.ENV }}" > .env
        cat .env
        
    - name: Install npm dependencies
      run: npm install

    - name: Run build task
      run: npm run build --if-present
      
    - name: Install PM2
      run: npm install pm2 -g

    - name: Deploy to Server
      uses: easingthemes/ssh-deploy@main
      with:
        SSH_PRIVATE_KEY: ${{ secrets.SSH_PRIVATE_KEY }}
        ARGS: "-rlgoDzvc -i --delete"
        REMOTE_HOST: ${{ secrets.HOST_DNS }}
        REMOTE_USER: ${{ secrets.USERNAME }}
        TARGET: ${{ secrets.REMOTE_TARGET }}
        EXCLUDE: "/node_modules/"

    - name: PM2 restart
      run: |
        touch promoSite.pem
        echo "${{ secrets.SSH_PRIVATE_KEY }}" > promoSite.pem
        chmod 400 promoSite.pem
        ssh -i promoSite.pem ${{secrets.USERNAME}}@${{secrets.HOST_DNS}} -p 22 '
        pm2 kill
        cd /home/ec2-user/app-promosite/
        pm2 start npm --name "app-promosite" -- start -- --port 3000
        '
*/