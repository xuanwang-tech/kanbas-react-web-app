let currentUser = null;
function UserRoutes(app) {
  const signin = async (req, res) => { ... };
  const account = async (req, res) => {
    res.json(currentUser);
  };
  app.post("/api/users/signin", signin);
  app.post("/api/users/account", account);
}
export default UserRoutes;
