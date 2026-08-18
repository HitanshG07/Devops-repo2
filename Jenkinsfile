pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                echo 'Checking out source code from Git repository...'
            }
        }
        stage('Build') {
            steps {
                echo 'Building application...'
            }
        }
        stage('Test') {
            steps {
                echo 'Running unit tests...'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying application to environment...'
            }
        }
    }
}
