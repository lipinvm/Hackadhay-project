// Fake login system
const users = {
  consumer: { name: "Demo Consumer", type: "consumer" },
  seller: { name: "FreshMart", type: "seller" },
  organization: { name: "Hope Kitchen", type: "organization" }
};

function login(userType) {
  localStorage.setItem('currentUser', JSON.stringify(users[userType]));
  window.location.href = `/${userType}`;
}
