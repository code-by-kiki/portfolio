import React from "react";



function Contact (){

    const card={
    backgroundColor:"rgb(246, 246, 246)",
    fontFamily: 'serif',
}
    return (
<div className="container-fluid card mt-5" style={card}>
  <div className="row  d-flex align-items-start">
    <h1 className="mt-5">Send Me A Message</h1>
    <div className="col-md-6 col-sm-12 mt-5  pt-5 text-start">
      <h3 className="mb-4">Contact Me !</h3>
      <section style={{ textIndent: "3rem", marginTop: "3rem", fontStyle: 'italic' }}>
        <p className="mb-4"><i className="bi bi-geo-alt-fill"></i> Thirupuvanam Sivagangai</p>
        <p className="mb-4"><i className="bi bi-telephone"></i> 6374760410</p>
        <p className="mb-4"><i className="bi bi-envelope"></i> root.krithika10@gmail.com</p>
        <p><i className="bi bi-linkedin"></i> <a href="https://www.linkedin.com/in/krithika-selvam-km10" className="text-decoration-none text-dark">Linkedin</a></p>
      </section>
    </div>
    <div className="col-md-6 col-sm-12 mt-5 pt-5">
     <form>
        <input type="text" placeholder="Name" className="form-control mb-3" style={{ maxWidth: '100%' }} /><br />
        <input type="number" placeholder="Number" className="form-control mb-3" style={{ maxWidth: '100%' }} /><br />
        <textarea placeholder="Content" className="form-control mb-3" style={{ maxWidth: '100%', height: '200px' }} /><br />
    </form>
      <button className="btn btn-button mb-5 " style={{backgroundColor:'rgb(162, 213, 198)'}}>Send me</button>
    </div>
  </div>
</div>

    )
}

export default Contact;