// middleware/checkWorkingHours.js
function checkWorkingHours(req, res, next) {
    const now = new Date();
    const day = now.getDay();
    const hour = now.getHours();
    
    if (day >= 1 && day <= 5 && hour >= 9 && hour < 17) {
      next();
    } else {
      res.send("The web application is only available during working hours (Monday to Friday, from 9 to 17).");
    }
  }
  
  module.exports = checkWorkingHours;
  