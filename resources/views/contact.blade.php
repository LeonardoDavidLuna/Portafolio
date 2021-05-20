@extends('layouts.template')

@section('content')
<div class="container">
	<div class="row">
		<div class="col-12">
			<div class="mx-auto w-50">
				<div class="btn-group">
					<img src="{{ asset('images/logo_facebook.jpg') }}" class="w-75">
					<img src="{{ asset('images/logo_instagram.jpg') }}" class="w-75">
					<img src="{{ asset('images/logo_whatsapp.jpg') }}" class="w-75">
				</div>
				<div class="btn-group">
					<img src="{{ asset('images/logo_skype.jpg') }}" class="w-75">
					<img src="{{ asset('images/logo_youtube.jpg') }}" class="w-75">
					<img src="{{ asset('images/logo_pinterest.jpg') }}" class="w-75">
				</div>
				<div class="btn-group">
					<img src="{{ asset('images/logo_snapchat.jpg') }}" class="w-75">
					<img src="{{ asset('images/logo_tinder.jpg') }}" class="w-75">
					<img src="{{ asset('images/logo_twitter.jpg') }}" class="w-75">
				</div>
			</div>
		</div>
	</div>
</div>
@endsection