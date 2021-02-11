<html lang="en">

<head>
  <!-- Required meta tags -->
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <title>Visit Schedule</title>
  <!-- plugins:css -->
  <link rel="stylesheet" href="{{ asset('vendors/mdi/css/materialdesignicons.min.css') }}">
  <link rel="stylesheet" href="{{ asset('vendors/base/vendor.bundle.base.css') }}">
  <!-- endinject -->
  <!-- plugin css for this page -->
  <link rel="stylesheet" href="{{ asset('vendors/datatables.net-bs4/dataTables.bootstrap4.css') }}">
  <!-- End plugin css for this page -->
  <!-- inject:css -->
  <link rel="stylesheet" href="{{ asset('css/style.css') }}">
  <!-- endinject -->
{{--   <link rel="shortcut icon" href="{{ asset('images/outlet_fab_icon(64X64).ico') }}" /> --}}
  <link rel="stylesheet" href="{{ asset('css/custom.css') }}">
</head>
<body>
	
	<div id="app" class="container-scroller">
        <app></app>   
    </div>

    <script src="{{ mix('js/app.js') }}"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.js" integrity="sha512-WNLxfP/8cVYL9sj8Jnp6et0BkubLP31jhTG9vhL/F5uEZmg5wEzKoXp1kJslzPQWwPT1eyMiSxlKCgzHLOTOTQ==" crossorigin="anonymous"></script>

	<script src="{{ asset('vendors/base/vendor.bundle.base.js') }}"></script>
	<!-- endinject -->
	<!-- Plugin js for this page-->
	{{-- <script src="vendors/chart.js/Chart.min.js"></script> --}}
	<script src="{{ asset('vendors/datatables.net/jquery.dataTables.js') }}"></script>
	<script src="{{ asset('vendors/datatables.net-bs4/dataTables.bootstrap4.js') }}"></script>
	<!-- End plugin js for this page-->
	<!-- inject:js -->
	<script src="{{ asset('js/off-canvas.js') }}"></script>
	<script src="{{ asset('js/hoverable-collapse.js') }}"></script>
	<script src="{{ asset('js/template.js') }}"></script>
	<!-- endinject -->
	<!-- Custom js for this page-->
{{-- 	<script src="{{ asset('js/dashboard.js') }}"></script> --}}
	<script src="{{ asset('js/data-table.js') }}"></script>
	<script src="{{ asset('js/jquery.dataTables.js') }}"></script>
	<script src="{{ asset('js/dataTables.bootstrap4.js') }}"></script>
	<!-- End custom js for this page-->
</body>

</html>