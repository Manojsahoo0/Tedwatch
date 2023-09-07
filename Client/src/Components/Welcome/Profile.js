import React from 'react'
import "./Profile.css"
import Navbar from './Navbar'

export default function Profile() {
	let userData = JSON.parse(localStorage.getItem("user"))
  return (
   <>
   <Navbar/>
   <div className="container body-content">
<div className="row">
		<div className="col-12">

			<div className="my-5">
				<h3>My Profile</h3>
				<hr/>
			</div>

			<form className="file-upload">
				<div className="row mb-5 gx-5">
	
					<div className="col-xxl-8 mb-5 mb-xxl-0">
						<div className="bg-secondary-soft px-4 py-5 rounded">
							<div className="row g-3">
								
		
								<div className="col-md-6">
									<label className="form-label">Full Name *</label>
									<input type="text" className="form-control" placeholder="" aria-label="Full name" value={userData.name} disabled/>
								</div>
					
								<div className="col-md-6">
									<label className="form-label">Phone number *</label>
									<input type="text" className="form-control" placeholder="" aria-label="Phone number" disabled/>
								</div>
							
								<div className="col-md-6">
									<label className="form-label">Mobile number *</label>
									<input type="text" className="form-control" placeholder="" aria-label="Phone number" value={userData.phone} disabled/>
								</div>
								
								<div className="col-md-6">
									<label htmlFor="inputEmail4" className="form-label">Email *</label>
									<input type="email" className="form-control" id="inputEmail4" value={userData.email} disabled/>
								</div>
							</div> 
						</div>
					</div>
				</div> 
			</form>
		</div>
	</div>
	</div>
   </>
  )
}
