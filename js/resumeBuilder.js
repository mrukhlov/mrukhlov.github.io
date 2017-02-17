/*
This is empty on purpose! Your code to build the resume will go here.
 */
var bio = {
    "name": "Max Rukhlov",
    "role": "Human",
    "welcomeMessage": "Hey all :)",
    "biopic": "http://vignette1.wikia.nocookie.net/one-minute-meelee-fanon/images/5/57/Fry_660.jpg/revision/latest?cb=20160124000445",
    "contacts": {
        "mobile": "+123456789",
        "email": "asd@mail.ru",
        "github": "github.com/mrukhlov",
        "location": "Moscow"
    },
    "skills": ["python", "js"],
    "display": function() {
        displayInfo(HTMLheaderName, bio.name, "#header");
        displayInfo(HTMLheaderRole, bio.role, "#header");
        displayInfo(HTMLmobile, bio.contacts.mobile, "#header");
        displayInfo(HTMLemail, bio.contacts.email, "#header");
        displayInfo(HTMLgithub, bio.contacts.github, "#header");
        displayInfo(HTMLlocation, bio.contacts.location, "#header");
        displayInfo(HTMLbioPic, bio.biopic, "#header");
        displayInfo(HTMLwelcomeMsg, bio.welcomeMessage, "#header");
        displayInfo(HTMLskillsStart, '', "#header");
        bio.skills.forEach(function(skill) {
            displayInfo(HTMLskills, skill, "#header");
        });
    }
};

var education = {
    "schools": [{
            "name": "RSUH",
            "location": "Moscow",
            "degree": "MA",
            "major": ["orienalistics"],
            "dates": "2007-2012",
            "url": "http://rggu.com",
        },
        {
            "name": "NCKU",
            "location": "Tainan",
            "degree": "MA",
            "major": ["orienalistics"],
            "dates": "2010-2010",
            "url": "http://web.ncku.edu.tw/bin/home.php?Lang=en",
        },
    ],
    "onlineCourses": [{
            "dates": "October 2016 - February 2017",
            "url": "https://www.udacity.com/course/full-stack-web-developer-nanodegree--nd004",
            "title": "Full Stack Nano Degree",
            "school": "Udacity",
        },
        {
            "dates": "February 2017 - Present",
            "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001",
            "title": "Front End Nano Degree",
            "school": "Udacity",
        },
    ],
    "display": function() {
        displayInfo(HTMLschoolStart, '', "#education");
        this.schools.forEach(function(item) {
            displayInfo(HTMLschoolName, item.name, "#education");
            displayInfo(HTMLschoolDegree, item.degree, "#education");
            displayInfo(HTMLschoolDates, item.dates, "#education");
            displayInfo(HTMLschoolLocation, item.location, "#education");
            item.major.forEach(function(maj) {
                displayInfo(HTMLschoolMajor, maj, "#education");
            })
        });
        displayInfo(HTMLonlineClasses, '', "#education");
        this.onlineCourses.forEach(function(item) {
            displayInfo(HTMLonlineTitle, item.title, "#education");
            displayInfo(HTMLonlineSchool, item.school, "#education");
            displayInfo(HTMLonlineDates, item.dates, "#education");
            displayInfo(HTMLonlineURL, item.url, "#education");
        });
    }
};

var work = {
    "jobs": [{
        "title": "Linguist",
        "employer": "Api.ai",
        "dates": "in progress",
        "location": "Moscow",
        'description': "Making corporate product awesome."
    }],
    "display": function() {
        displayInfo(HTMLworkStart, '', "#workExperience");
        this.jobs.forEach(function(item) {
            displayInfo(HTMLworkEmployer, item.employer, "#workExperience");
            displayInfo(HTMLworkTitle, item.title, "#workExperience");
            displayInfo(HTMLworkDates, item.dates, "#workExperience");
            displayInfo(HTMLworkLocation, item.location, "#workExperience");
            displayInfo(HTMLworkDescription, item.description, "#workExperience");
        });
    }
};

var projects = {
    "projects": [{
            "title": "Neighborhood Project",
            "dates": "",
            "description": "Interactive map of nearby places.",
            "images": []
        },
        {
            "title": "Item Catalog App",
            "dates": "",
            "description": "Catalog app.",
            "images": []
        },
    ],
    "display": function() {
        displayInfo(HTMLprojectStart, '', "#projects");
        this.projects.forEach(function(item) {
            displayInfo(HTMLprojectTitle, item.title, "#projects");
            displayInfo(HTMLprojectDates, item.dates, "#projects");
            displayInfo(HTMLprojectDescription, item.description, "#projects");
            item.images.forEach(function(imgg) {
                displayInfo(HTMLprojectHTMLprojectImage, imgg, "#projects");
            })
        });
    }
};

function displayInfo(tag, data, dom_element) {
    var formatted = tag.replace("%data%", data);
    $(dom_element).append(formatted);
}

/*internationalize*/
function displayInternationalize() {
    displayInfo(internationalizeButton, '', "#main");
}


// function locationizer(work_obj) {
// 	var work_list = [];
// 	work_obj.jobs.forEach(function (job) {
// 		work_list.push(job.location)
// 	});
// 	return work_list;
// }
//
// function inName(name) {
// 	var name_list = name.split(' ');
// 	name_list[1] = name_list[1].toUpperCase();
// 	return name_list.join(' ')
// }
//
// console.log(inName(bio.name)==='Max RUKHLOV');


education.display();
work.display();
projects.display();
bio.display();
displayInternationalize();

$("#mapDiv").append(googleMap);