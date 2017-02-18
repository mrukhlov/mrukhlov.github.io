var bio = {
    "name": "Maxim Rukhlov",
    "role": "Human",
    "welcomeMessage": "Slacker, wannabe web developer, good guy.",
    "biopic": "http://vignette1.wikia.nocookie.net/one-minute-meelee-fanon/images/5/57/Fry_660.jpg/revision/latest?cb=20160124000445",
    // "biopic": "/images/fry.jpg",
    "contacts": {
        "mobile": "+123456789",
        "email": "mrukhlov@speaktoit.com",
        "github": "github.com/mrukhlov",
        "location": "Moscow"
    },
    "skills": ["Python", "Javascript", "Apache Velocity", "Chinese Language", "Git", "Django", "SQL", "NixOS"],
    "display": function() {
        displayInfo("%data%", HTMLheaderName, inName(bio.name), "#header");
        displayInfo("%data%", HTMLheaderRole, bio.role, "#header");
        displayInfo("%data%", HTMLmobile, bio.contacts.mobile, "#topContacts");
        displayInfo("%data%", HTMLemail, bio.contacts.email, "#topContacts");
        displayInfo("%data%", HTMLgithub, bio.contacts.github, "#topContacts");
        displayInfo("%data%", HTMLlocation, bio.contacts.location, "#topContacts");
        displayInfo("%data%", HTMLmobile, bio.contacts.mobile, "#footerContacts");
        displayInfo("%data%", HTMLemail, bio.contacts.email, "#footerContacts");
        displayInfo("%data%", HTMLgithub, bio.contacts.github, "#footerContacts");
        displayInfo("%data%", HTMLlocation, bio.contacts.location, "#footerContacts");
        displayInfo("%data%", HTMLbioPic, bio.biopic, "#header");
        displayInfo("%data%", HTMLwelcomeMsg, bio.welcomeMessage, "#header");
        displayInfo("%data%", HTMLskillsStart, '', "#header");
        bio.skills.forEach(function(skill) {
            displayInfo("%data%", HTMLskills, skill, "#skills");
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
            "majors": ["Chinese Language"],
            "dates": "July 2010-August 2010",
            "url": "http://web.ncku.edu.tw/bin/home.php?Lang=en",
        },
        {
            "name": "XMU",
            "location": "Xiamen",
            "degree": "MA",
            "majors": ["Chinese Language"],
            "dates": "2011-2012",
            "url": "http://www.xmu.edu.cn/en/",
        },
        {
            "name": "NCKU",
            "location": "Tainan",
            "degree": "MA",
            "majors": ["Chinese Language"],
            "dates": "September 2016-December 2016",
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
        {
            "dates": "February 2016 - March 2016",
            "url": "https://www.coursera.org/learn/supervised-learning/home/welcome",
            "title": "Supervised Learning",
            "school": "Coursera",
        },
        {
            "dates": "February 2016 - March 2016",
            "url": "https://www.coursera.org/learn/supervised-learning/home/welcome",
            "title": "Supervised Learning",
            "school": "Coursera",
        },
        {
            "dates": "January 2016 - February 2016",
            "url": "http://en.specialist.ru",
            "title": "Programming in HTML with JavaScript and CSS3",
            "school": "«Specialist» Computer Training Center",
        }],
    "display": function() {
        displayInfo("%data%", HTMLschoolStart, '', "#education");
        this.schools.forEach(function(item) {
            displayInfo("%data%", HTMLschoolName.replace('#', item.url), item.name, ".education-entry");
            displayInfo("%data%", HTMLschoolDegree, item.degree, ".education-entry");
            displayInfo("%data%", HTMLschoolDates, item.dates, ".education-entry");
            displayInfo("%data%", HTMLschoolLocation, item.location, ".education-entry");
            item.majors.forEach(function(maj) {
                displayInfo("%data%", HTMLschoolMajor, maj, ".education-entry");
            });
        });
        displayInfo("%data%", HTMLclassStart, '', "#education");
        this.onlineCourses.forEach(function(item) {
            displayInfo("%data%", HTMLonlineTitle, item.title, ".class-entry");
            displayInfo("%data%", HTMLonlineSchool, item.school, ".class-entry");
            displayInfo("%data%", HTMLonlineDates, item.dates, ".class-entry");
            displayInfo("%data%", HTMLonlineURL, item.url, ".class-entry");
        });
    }
};

var work = {
    "jobs": [{
        "title": "Linguist",
        "employer": "Api.ai",
        "dates": "in progress",
        "location": "Moscow",
        'description': "Training and supporting interactive Chinese language q&a system, user " +
        "communication, setting and managing inner linguistic services, interaction with API."
    },
    {
        "title": "Translator",
        "employer": "Mental Games",
        "dates": "January 2011-February 2011",
        "location": "Moscow",
        'description': "Application text translation, application testing."
    }],
    "display": function() {
        displayInfo("%data%", HTMLworkStart, '', "#workExperience");
        this.jobs.forEach(function(item) {
            displayInfo("%data%", HTMLworkEmployer, item.employer, ".work-entry");
            displayInfo("%data%", HTMLworkTitle, item.title, ".work-entry");
            displayInfo("%data%", HTMLworkDates, item.dates, ".work-entry");
            displayInfo("%data%", HTMLworkLocation, item.location, ".work-entry");
            displayInfo("%data%", HTMLworkDescription, item.description, ".work-entry");
        });
    }
};

var projects = {
    "projects": [{
            "title": "Neighborhood Project",
            "dates": "February 2017",
            "description": "Interactive map of nearby places.",
            "images": ["/images/neigh.jpg"]
        },
        {
            "title": "Item Catalog App",
            "dates": "December 2016",
            "description": "Catalog app built on Flask framework.",
            "images": ["/images/cat.png"]
        },
    ],
    "display": function() {
        displayInfo("%data%", HTMLprojectStart, '', "#projects");
        this.projects.forEach(function(item) {
            displayInfo("%data%", HTMLprojectTitle, item.title, ".project-entry");
            displayInfo("%data%", HTMLprojectDates, item.dates, ".project-entry");
            displayInfo("%data%", HTMLprojectDescription, item.description, ".project-entry");
            item.images.forEach(function(imgg) {
                displayInfo("%data%", HTMLprojectImage, imgg, ".project-entry");
            });
        });
    }
};

/*function take variable from helper.js as tag, object data as data and populates dom element with it*/
function displayInfo(substring, tag, data, dom_element) {
    var formatted = tag.replace(substring, data);
    $(dom_element).append(formatted);
}

/*internationalize*/
function displayInternationalize() {
    displayInfo(substring, internationalizeButton, '', "#main");
}

function inName(name) {
	var name_list = name.split(' ');
	name_list[1] = name_list[1].toUpperCase();
	return name_list.join(' ');
}

education.display();
work.display();
projects.display();
bio.display();
$("#mapDiv").append(googleMap);