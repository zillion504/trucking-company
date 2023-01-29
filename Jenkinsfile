pipeline {
  agent any
  environment {
    registry = "registry.bgodley.com"
    outImage = "registry.bgodley.com/roadrunner-site:latest"
  }

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
        withCredentials([usernamePassword(credentialsId: 'docker-registry-credentials', passwordVariable: 'DOCKER_REGISTRY_PASSWORD', usernameVariable: 'DOCKER_REGISTRY_USER')]) {
          sh 'echo $DOCKER_REGISTRY_PASSWORD | docker login --username $DOCKER_REGISTRY_USER --password-stdin $registry'
          sh 'docker build . --tag="$outImage"'
          sh 'docker push $outImage'
        }
      }
    }
  }
}