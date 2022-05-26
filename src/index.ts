interface Person {
  firstName: string;
  lastName: string;
}
interface App {
  username: string;
  id: string;
}
function greeter(person: Person) {
  return "Hello, " + person.firstName + " " + person.lastName;
}
function generate(app: App){
  return `<style>*{color:#94bfa7;margin: 0;}</style><p>loged in as: " + app.username + app.id + "</p><canvas id="myCanvas" width="200" height="100"></canvas><script src="scripts/canvas.js"></script>`
}
function appSetup(){
  let app = {username: prompt("enter a username"), id: "000001"}
}
let user = { firstName: "typescript", lastName: "website" };
document.body.textContent = greeter(user);
