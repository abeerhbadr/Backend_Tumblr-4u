/* eslint-disable linebreak-style */
// ///////////////////////////////////////////////////////
// // <==> This File Creates Rbac OF User Module <==> ////
// ///////////////////////////////////////////////////////

/* =================== <-- Variables Declarations --> =================== */
const Rbac = require('easy-rbac');
const opts = require('./policy/index');
/* =========== <--> End <--> =========== */

/* =================== <-- Create Rbac OF User Module --> =================== */
userRbac = Rbac.create(opts);
/* =========== <--> End <--> =========== */

/* ======================== <-- Export User Rbac --> ======================== */
module.exports = userRbac;
/* =========== <--> End <--> =========== */
