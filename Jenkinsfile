pipeline {
  agent any
  
  stages {
    stage("Install dependencies") {
      agent {
        docker {
          image "node:alpine"
          args "-u root:root"
        }
      }
      steps {
        sh 'npm ci'
      }
    }
    stage("Run Tests") {
      agent {
        docker {
          image "node:alpine"
          args "-u root:root"
        }
      }
      steps {
        sh 'npm run test'
      }
    }
    stage("Build") {
      agent {
        docker {
          image "node:alpine"
          args "-u root:root"
        }
      }
      steps {
        sh 'npm run build'
      }
    }
    stage("Create docker image") {
      steps {
        script {
          docker.withRegistry("https://registry.bgodley.com/", "docker-registry-credentials") {
            def appImage = docker.build("roadrunner-site:latest")
            appImage.push()
          }
        }
      }
    }
  }
}