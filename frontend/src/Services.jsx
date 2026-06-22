import './ServicePage.css';

export default function Services() {
  return ( 
              <div className="services-page">
    
          {/* Hero */}
          <div className="services-hero">
            <h1>Our Services</h1>
            <p>Explore the powerful features of our Employee Management System</p>
          </div>
    
          {/* Services */}
          <div className="services-container">
            <div className="services-grid">
    
              <div className="service-card">
                <div className="service-icon">👨‍💼</div>
                <h3>Employee Management</h3>
                <p>Store and manage employee data efficiently.</p>
              </div>
    
              <div className="service-card">
                <div className="service-icon">⏱️</div>
                <h3>Attendance Tracking</h3>
                <p>Track employee attendance in real-time.</p>
              </div>
    
              <div className="service-card">
                <div className="service-icon">💰</div>
                <h3>Payroll System</h3>
                <p>Automate salary calculation and payslips.</p>
              </div>
    
              <div className="service-card">
                <div className="service-icon">📊</div>
                <h3>Performance</h3>
                <p>Evaluate employee performance easily.</p>
              </div>
    
              <div className="service-card">
                <div className="service-icon">📅</div>
                <h3>Leave Management</h3>
                <p>Manage leave requests and approvals.</p>
              </div>
    
              <div className="service-card">
                <div className="service-icon">🔐</div>
                <h3>Security</h3>
                <p>Role-based secure access control system.</p>
              </div>
    
            </div>
          </div>
    
          {/* Footer CTA */}
          <div className="services-footer">
            <h2>Upgrade Your Workforce Management</h2>
            <button>Get Started</button>
          </div>
    
        </div>
        
  
  )
}