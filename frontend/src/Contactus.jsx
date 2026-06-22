import './ContactUsPage.css';

export default function Contactus() {

  return (
    


        <div className="contact-page">
    
          {/* Hero */}
          <div className="contact-hero">
            <h1>Contact Us</h1>
            <p>We are here to help you manage your employees better</p>
          </div>
    
          {/* Main Section */}
          <div className="contact-container">
    
            {/* Info */}
            <div className="contact-card contact-info">
              <h2>Get In Touch</h2>
              <p>Email: Rohitkhadke05@gmail.com</p>
              <p>Phone: +91 7058623174</p>
              <p>Location: Pune, India</p>
    
              <h3 style={{ marginTop: "20px" }}>Working Hours</h3>
              <p>Mon - Fri: 9 AM - 6 PM</p>
              <p>Sat: 10 AM - 4 PM</p>
            </div>
    
            {/* Form */}
            <div className="contact-card contact-form">
              <h2>Send Message</h2>
    
              <label>Name</label>
              <input type="text" placeholder="Enter your name" />
    
              <label>Email</label>
              <input type="email" placeholder="Enter your email" />
    
              <label>Message</label>
              <textarea rows="5" placeholder="Enter your message"></textarea>
    
              <button>Send Message</button>
            </div>
    
          </div>
    
          {/* Map */}
          <div className="map-section">
            <div className="map-box">
              <p>Map Placeholder</p>
            </div>
          </div>
    
          {/* Footer */}
          <div className="contact-footer">
            <h2>Need Help? Contact Us Today</h2>
            <button>Support</button>
          </div>
    
        </div>
      
  )
}