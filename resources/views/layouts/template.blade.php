<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>
<body>    

    <div class="container">
      
      <header class="blog-header py-3">
        <div class="row flex-nowrap justify-content-between align-items-center">
          <div class="col text-center">
            <h3 class="float-md-start mb-0">Portafolio</h3>
          </div>            
        </div>
      </header>
    
      <div class="nav-scroller py-1 mb-2">
        <nav class="nav d-flex justify-content-between">
            <a class="navbar-brand"       href="{{route('index')}}"><img src="{{ asset('images/favicon.png') }}" alt="N-Logo" style="width:35px;"></a>
            <a class="p-2 link-secondary" href="{{route('index')}}">Inicio</a>
            <a class="p-2 link-secondary" href="{{route('biography')}}">Biografía</a>
            <a class="p-2 link-secondary" href="{{route('proyects')}}">Proyectos</a>
            <a class="p-2 link-secondary" href="{{route('games')}}">Juegos</a>
            <a class="p-2 link-secondary" href="{{route('hobbies')}}">Pasatiempos</a>
            <a class="p-2 link-secondary" href="https://github.com/LeonardoDavidLuna">GitHub</a>
            <a class="p-2 link-secondary" href="{{route('others')}}">Otros</a>
            <a class="p-2 link-secondary" href="{{route('contact')}}">Contacto</a>
        </nav>
      </div>
      <hr>
    </div>      
   
  <main class="py-4">
    @yield('content')
  </main>
    <hr>

    <footer class="my-5 pt-5 text-muted text-center text-small">  
      <p class="mb-1">Nicolás Luna &copy; 2021</p>
      <ul class="list-inline">
        <li class="list-inline-item"><a href="{{route('terms')}}">Terminos</a></li>
          <li class="list-inline-item"><a href="{{route('privacy')}}">Privacidad</a></li>
          <li class="list-inline-item"><a href="{{route('contact')}}">Contacto</a></li>
      </ul>
    </footer>
      
      {!! Html::script('bootstrap/assets/js/docs.min.js') !!}
      {!! Html::script('bootstrap/dist/js/botstrap.js') !!}
      {!! Html::script('bootstrap/dist/js/botstrap.min.js') !!}
      {!! Html::script('bootstrap/dist/js/botstrap.bundle.js') !!}
      {!! Html::script('bootstrap/dist/js/botstrap.bundle.min.js') !!}
      <script src="{{ asset('js/app.js') }}" defer></script>
      @yield('scripts')
      </body>
</html>
