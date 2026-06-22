import './AboutUsPage.css';


export default function Aboutus() {
  return (
   
     <div className="about-page">

      {/* Hero */}
      <div className="about-hero">
        <h1>About Us</h1>
        <p>
          Learn more about our Employee Management System and how we help
          businesses grow efficiently.
        </p>
      </div>

      {/* Mission Section */}
      <div className="about-container">
        <div className="about-section">

          <div className="about-text">
            <h2>Our Mission</h2>
            <p>
              Our mission is to simplify employee management by providing a
              smart and efficient platform. We help organizations reduce manual
              work, improve accuracy, and manage their workforce effectively.
            </p>
          </div>

          <div className="about-card">
            <h3>Key Highlights</h3>
            <ul>
              <li>✔ Easy Employee Records</li>
              <li>✔ Real-time Attendance</li>
              <li>✔ Automated Payroll</li>
              <li>✔ Secure Access</li>
            </ul>
          </div>

        </div>
          {/* Features */}
        <div className="about-features">

          <div className="feature-box">
            <h3>Easy to Use</h3>
            <p>User-friendly interface for all users.</p>
          </div>

          <div className="feature-box">
            <h3>Fast</h3>
            <p>Quick operations with real-time updates.</p>
          </div>

          <div className="feature-box">
            <h3>Secure</h3>
            <p>Protects employee data with high security.</p>
          </div>

        </div>
      </div>

      {/* Footer */}
      <div className="about-footer">
        <h2>Start Managing Employees Smartly</h2>
        <button>Get Started</button>
      </div>

    </div>
  
  )
}