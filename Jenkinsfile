pipeline {
  agent {
    docker {
      image "node:alpine"
      args "-u root:root"
    }
  }


  stages {
    stage("Install dependencies") {
      steps {
        sh 'npm ci'
      }
    }
    stage("Run Tests") {
      steps {
        sh 'npm run test'
      }
    }
    stage("Build") {
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