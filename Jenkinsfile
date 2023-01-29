pipeline {
  agent any
  environment {
    outImage = "registry.bgodley.com/roadrunner-site:latest"
  }

  stages {
    stage("Install dependencies") {
      agent {
        docker {
          image "node:alpine"
        }
      }
      steps {
        sh 'npm install'
      }
    }
    stage("Run Tests") {
      agent {
        docker {
          image "node:alpine"
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
        }
      }
      steps {
        sh 'npm run build'
      }
    }
    stage("Create docker image") {
      steps {
        withCredentials([usernamePassword(credentialsId: 'docker-registry-credentials', passwordVariable: 'DOCKER_REGISTRY_PASSWORD', usernameVariable: 'DOCKER_REGISTRY_USER')]) {
          sh 'docker login --username $DOCKER_REGISTRY_USER --password $DOCKER_REGISTRY_PASSWORD'
          sh 'docker build . --tag="$outImage"'
          sh 'docker push $outImage'
        }
      }
    }
  }
}