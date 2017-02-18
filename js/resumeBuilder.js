var bio = {
    "name": "Maxim Rukhlov",
    "role": "Human",
    "welcomeMessage": "Hey all :)",
    "biopic": "http://vignette1.wikia.nocookie.net/one-minute-meelee-fanon/images/5/57/Fry_660.jpg/revision/latest?cb=20160124000445",
    "contacts": {
        "mobile": "+123456789",
        "email": "asd@mail.ru",
        "github": "github.com/mrukhlov",
        "location": "Moscow"
    },
    "skills": ["Python", "Javascript", "Apache Velocity", "Chinese"],
    "display": function() {
        displayInfo(HTMLheaderName, inName(bio.name), "#header");
        displayInfo(HTMLheaderRole, bio.role, "#header");
        displayInfo(HTMLmobile, bio.contacts.mobile, "#topContacts");
        displayInfo(HTMLemail, bio.contacts.email, "#topContacts");
        displayInfo(HTMLgithub, bio.contacts.github, "#topContacts");
        displayInfo(HTMLlocation, bio.contacts.location, "#topContacts");
        displayInfo(HTMLmobile, bio.contacts.mobile, "#footerContacts");
        displayInfo(HTMLemail, bio.contacts.email, "#footerContacts");
        displayInfo(HTMLgithub, bio.contacts.github, "#footerContacts");
        displayInfo(HTMLlocation, bio.contacts.location, "#footerContacts");
        displayInfo(HTMLbioPic, bio.biopic, "#header");
        displayInfo(HTMLwelcomeMsg, bio.welcomeMessage, "#header");
        displayInfo(HTMLskillsStart, '', "#header");
        bio.skills.forEach(function(skill) {
            displayInfo(HTMLskills, skill, "#skills");
        });
    }
};

var education = {
    "schools": [{
            "name": "RSUH",
            "location": "Moscow",
            "degree": "MA",
            "majors": ["orienalistics"],
            "dates": "2007-2012",
            "url": "http://rggu.com",
        },
        {
            "name": "NCKU",
            "location": "Tainan",
            "degree": "MA",
            "majors": ["orienalistics"],
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
            "dates": "February 2017 - March 2017",
            "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001",
            "title": "Front End Nano Degree",
            "school": "Udacity",
        },
    ],
    "display": function() {
        displayInfo(HTMLschoolStart, '', "#education");
        this.schools.forEach(function(item) {
            displayInfo(HTMLschoolName, item.name, ".education-entry");
            displayInfo(HTMLschoolDegree, item.degree, ".education-entry");
            displayInfo(HTMLschoolDates, item.dates, ".education-entry");
            displayInfo(HTMLschoolLocation, item.location, ".education-entry");
            item.majors.forEach(function(maj) {
                displayInfo(HTMLschoolMajor, maj, ".education-entry");
            })
        });
        displayInfo(HTMLclassStart, '', "#education");
        this.onlineCourses.forEach(function(item) {
            displayInfo(HTMLonlineTitle, item.title, ".class-entry");
            displayInfo(HTMLonlineSchool, item.school, ".class-entry");
            displayInfo(HTMLonlineDates, item.dates, ".class-entry");
            displayInfo(HTMLonlineURL, item.url, ".class-entry");
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
            displayInfo(HTMLworkEmployer, item.employer, ".work-entry");
            displayInfo(HTMLworkTitle, item.title, ".work-entry");
            displayInfo(HTMLworkDates, item.dates, ".work-entry");
            displayInfo(HTMLworkLocation, item.location, ".work-entry");
            displayInfo(HTMLworkDescription, item.description, ".work-entry");
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
            displayInfo(HTMLprojectTitle, item.title, ".project-entry");
            displayInfo(HTMLprojectDates, item.dates, ".project-entry");
            displayInfo(HTMLprojectDescription, item.description, ".project-entry");
            item.images.forEach(function(imgg) {
                displayInfo(HTMLprojectImage, imgg, ".project-entry");
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

function inName(name) {
	var name_list = name.split(' ');
	name_list[1] = name_list[1].toUpperCase();
	return name_list.join(' ')
}

education.display();
work.display();
projects.display();
bio.display();
$("#mapDiv").append(googleMap);