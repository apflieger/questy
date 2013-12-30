<!DOCTYPE html>
<html ng-app="questy">
<head>
<!-- <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.2.1/angular.min.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.2.1/angular-route.min.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.2.1/angular-cookies.min.js"></script> -->
<script src="/js/angular/angular-1.2.4.js"></script>
<script src="/js/angular/angular-cookies-1.2.4.js"></script>
<script src="/js/angular/angular-route-1.2.4.js"></script>
<script src="/js/index.js"></script>
<!-- <link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.0.2/css/bootstrap.min.css"> -->
<link rel="stylesheet" href="/css/bootstrap.css">
<link rel="stylesheet" href="/css/index.css">
</head>
<body>
  <header class="page-header row">
    <div class="container">
      <div class="col-md-4">
        <h1><a href="#/qform">Questy</a></h1>
      </div>
      <div class="col-span-md-4 col-md-4">
      <%= "lol" %>
      </div>
    </div>
  </header>
  <div class="container" ng-view></div>
</body>
</html>
