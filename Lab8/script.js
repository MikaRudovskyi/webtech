/*

class Students {
    constructor(name, age, course, grade) {
        this.name = name;
        this.age = age;
        this.course = course;
        this.grade = grade;
    }

    displayInfo() {
        console.log(`Name: ${this.name}, Age: ${this.age}, Course: ${this.course}, Grade: ${this.grade}`);
    }
}

const student1 = new Students("Alice", 20, "Mathematics", "A");
const student2 = new Students("Bob", 21, "Physics", "B");
const student3 = new Students("Charlie", 22, "Computer Science", "A");

student1.displayInfo();
student2.displayInfo();
student3.displayInfo();

*/

class Component {
  constructor(selector) {
    this.$el = document.querySelector(selector);
  }

  blockHide() {
    this.$el.style.display = "none";
  }

  editColor(color) {
    this.$el.style.background = color;
  }

  // Новий метод для встановлення рамки
  setBorder(border) {
    this.$el.style.border = border;
  }
}

class Box extends Component {
  constructor(options) {
    super(options.selector);

    this.$el.style.width = options.width + "px";
    this.$el.style.height = options.height + "px";
    this.$el.style.background = options.color;
  }
}

const box1 = new Box({
  selector: "#box1",
  width: 1000,
  height: 50,
  color: "blue",
});

// Використовуємо новий метод
box1.setBorder("2px solid red");
