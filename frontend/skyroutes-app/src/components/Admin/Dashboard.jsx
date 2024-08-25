function Dashboard() {
  return (
    <div className="container">
      <div className="container__main">
        <div className="dashboard">
          <div className="dashboard__container">
            <div className="dashboard__welcome-message">
              <h1>Welcome👋, Admin!</h1>
              <p>We&rsquo;re glad to have you on board.</p>
              <p>
                Here&rsquo;s a quick overview of your <strong>incoming</strong>{" "}
                dashboard features.✨
              </p>
              <ul className="dashboard__features">
                <li>Monitor system performance</li>
                <li>Manage user accounts</li>
                <li>View recent activities</li>
                <li>Access reports and analytics</li>
              </ul>
              <p className="dashboard__support-message">
                If you need any assistance, feel free to reach out to our
                support team.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
