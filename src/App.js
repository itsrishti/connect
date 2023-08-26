import logo from './logo.svg';
import './App.css';

function App () {


        
    
      
          

  return (
<div className="bg-danger">
    

    

    <div className="container ">
        <div className="main-body bg-body-secondary">
            <div className="row">
                <div className="col-lg-4">
                    <div className="card bg-body-secondary ">
                        <div className="card-body bg-body-secondary ">
                            <div className="d-flex flex-column align-items-center text-center">
                                <img src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="Admin" className="rounded-circle p-1 bg-primary" width="110"/>
                                <div className="mt-3">
                                    <h4>Shiv Mehra</h4>
                                    <p className="text-secondary mb-1">Doctor</p>
                                    <p className="text-muted font-size-sm">Bay Area, San Francisco, CA</p>
                                    <button className="btn btn-primary ">Follow</button>
                                    <button className="btn btn-outline-primary">Message</button>
                                </div>
                            </div>
                            <hr className="my-4 "/>
                            <ul className="list-group list-group-flush ">
                                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                    <h6 className="mb-0">Age</h6>
                                    <span className="text-secondary">28</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                    <h6 className="mb-0">weight</h6>
                                    <span className="text-secondary">64kg</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                    <h6 className="mb-0">Height</h6>
                                    <span className="text-secondary">6'1</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                    <h6 className="mb-0">Gender</h6>
                                    <span className="text-secondary">Male</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                    <h6 className="mb-0">Blood Type</h6>
                                    <span className="text-secondary">A+</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                    <h6 className="mb-0">Blood Pressure</h6>
                                    <span className="text-secondary">120/80 mm Hg</span>
                                </li><li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                    <h6 className="mb-0">Pulse Rate</h6>
                                    <span className="text-secondary">80 bpm</span>
                                </li><li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                    <h6 className="mb-0">Date of Last Blood Donation Date</h6>
                                    <span className="text-secondary">01/09/23</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-lg-8">
                     <div className="card"> 
                        <div className="card-body">
                            <div className="row mb-3">
                                <div className="col-sm-3">
                                    <h6 className="mb-0">Full Name</h6>
                                </div>
                                <div className="col-sm-9 text-secondary">
                                    <input type="text" className="form-control" value="Shiv Mehra"/>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-sm-3">
                                    <h6 className="mb-0">Email</h6>
                                </div>
                                <div className="col-sm-9 text-secondary">
                                    <input type="text" className="form-control" value="shiv@gmail.com"/>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-sm-3">
                                    <h6 className="mb-0">Phone</h6>
                                </div>
                                <div class="col-sm-9 text-secondary">
                                    <input type="text" className="form-control" value="(320) 380-4539"/>
                                </div>
                            </div>
                            
                            <div className="row mb-3">
                                <div className="col-sm-3">
                                    <h6 className="mb-0">Address</h6>
                                </div>
                                <div className="col-sm-9 text-secondary">
                                    <input type="text" className="form-control" value="BayArea, SanFrancisco,CA"/>
                                </div>
                                
                            </div>
                            <div className="row mb-3">
                                <div className="col-sm-3">
                                    <h6 className="mb-0">Documents</h6>
                                </div>
                                <div className="col-sm-9 text-secondary">
                                    <input type="text" className="form-control" value="Aadhar Card"/>
                                </div>
                              
                            </div>
                            <div className="row">
                                <div className="col-sm-3"></div>
                                <div className="col-sm-9 text-secondary">
                                    <input type="button " className="btn btn-primary px-4" value="Save Changes"/>
                                </div>
                            </div>
                        </div>
                    </div> 
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="d-flex align-items-center mb-3">HEALTH STATUS</h5>
                                    <p>Allergies</p>
                                    <div className="progress mb-3" style={{height: '5px'}}>
                                        <div className="progress-bar bg-primary" role="progressbar" style={{width: '80%'}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <p>Blood Infection</p>
                                    <div className="progress mb-3" style={{height: '5px'}}>
                                        <div className="progress-bar bg-danger" role="progressbar" style={{width:'72%'}} aria-valuenow="72" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <p>Surgery</p>
                                    <div className="progress mb-3" style={{height: '5px'}}>
                                        <div className="progress-bar bg-success" role="progressbar" style={{width:' 89%'}} aria-valuenow="89" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <p>Plasma Requirement</p>
                                    <div className="progress mb-3" style={{height: '5px'}}>
                                        <div className="progress-bar bg-warning" role="progressbar" style={{width: '55%'}} aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <p>Diseases</p>
                                    <div className="progress" style={{height: '5px'}}>
                                        <div className="progress-bar bg-info" role="progressbar" style={{width:' 66%'}} aria-valuenow="66" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm" crossorigin="anonymous"></script> */}
    </div>
    
                       
  );
}

export default App;
