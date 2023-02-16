import React from 'react'

export default function Header() {
  return (
    <div>
        <nav class="navbar sticky-top navbar-expand-lg">
		<div class="container">
			<a class="navbar-brand" href="https://cuion.space/shopindia/">
				<img src="./assets/images/shopindialogo.png" alt="" width="180" height="52"/>
			  </a>
		  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
			<i class="fa-solid fa-bars"></i>
		  </button>
		  <div class="collapse navbar-collapse" id="navbarSupportedContent">
			<ul class="navbar-nav m-auto mb-2 mb-lg-0">
			  <li class="nav-item">
				<a class="nav-link" aria-current="page" href="https://cuion.space/shopindia/">HOME</a>
			  </li>
			  <li class="nav-item">
				<a class="nav-link" href="https://cuion.space/shopindia/shop/">SHOP</a>
			  </li>
			  <li class="nav-item">
				<a class="nav-link" href="https://cuion.space/shopindia/about-us-3/">ABOUT US</a>
			  </li>
			  <li class="nav-item">
				<a class="nav-link" href="https://cuion.space/shopindia/contact-us/">CONTACT US</a>
			  </li>
			</ul>
			<div class="icons">
				<i class="fa-brands fa-facebook-f"></i>
				<i class="fa-brands fa-instagram"></i>
				
			</div>
			
		  </div>
		</div>
	</nav>
	<div class="banner-section">
		<div class="p-5 text-center bg-image">

        <div class="text-light ">
         
        </div>
      </div>
    </div>
	<div class="contents">
		<div class="container">
			<p class="Description py-2">ShopIndiamart International – Aimed to serve the purchase needs of Indians abroad. You can purchase any Item from Indian E-commerce websites and get delivered
				to you internationally with simple steps. </p>
			<h4 class="heading py-3">Steps to follow</h4>
		<div class="list-items">
			<ul>
				<li>Register / Login with ShopIndiaMart</li>
				<li>Identify your product from any Indian e-commerce website</li>
				<li>Complete the form below with following details</li>
				<li>1. Shopping website name</li>
				<li>2. Product Link  /  Screenshot of the Product</li>
				<li>3. Further comments if any </li>
				<li>Create an order with ShopIndiaMart. We will review your order and get back to you.</li>
				<li>We will ship to you internationally once order is Confirmed.</li>
			</ul>
			<h4 class="heading py-3">Features of ShopIndiaMart</h4>
			<ul>
				<li>Easy for Indians abroad to get the products from any popular Indian e-Commerce websites.</li>
				<li>We identify your requirement with the screenshot and link provided</li>
				<li>We will make the purchase for you from India and Deliver to you with our partnered carriers.</li>
			</ul>
		</div>
		</div>
	</div>
    </div>
  )
}
