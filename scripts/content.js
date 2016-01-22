angular.module('app').factory('Content', function(){
	data = 
	{
		loadContent : function()
		{
			if(typeof(Storage) !== "undefined") {
			    // Code for localStorage/sessionStorage.
			    if(sessionStorage.cucsc == undefined)
			    {
			    	sessionStorage.cucsc = JSON.stringify(this);
			    	console.log("CONTENT LOADED");
			    }
			} else {
			    // Sorry! No Web Storage support..
			    console.log("NO STORAGE");
			}
			
			return JSON.parse(sessionStorage.cucsc);
		},
		

		en : [
		{
			id: "about",

			content : {
				title: "About the CUCSC",

				banner: "AboutPhoto.jpg",

				sections: [
					{
						text : "<p>Welcome to the official website of the 2016 Canadian Undergraduate Computer Science Conference (CUCSC). The CUCSC is a four day, bilingual academic conference aimed at undergraduate students studying computational sciences and related fields. The CUCSC will be the largest event of its kind in Canada, and will happen in the summer each year, attracting young minds from across the country. Many students will be presenting on topics of interest and research. Keynote speakers from universities and industry will also be showcasing their research and knowledge. </p><p>The CUCSC is an annual research conference for undergraduates in the field of computer science. The central theme of this year's conference is applied research. Applied research is focused on problem-solving, and is generally linked to tangible industry applications. Participants will hear from professional speakers representing research initiatives from both post-secondary institutions as well as within industry. However, the main focus will be on those students who have completed industry projects, solved real-world problems, or have a topic of interest in the field of computing and want the opportunity to showcase their passion to their peers.</p><p>This website will be the main source of information regarding the conference in the weeks leading up to it. All updates here will also be echoed on our <a href=”https://www.facebook.com/groups/1673937852843416/”>Facebook</a> page. Any questions can be directed to <a href=”mailto:info@cucsc.ca”>info@cucsc.ca</a></p>"
					},
					{
						heading: "Conference Description",
						text: "<p>This conference will be the first in North America dedicated to showcasing undergraduate research in the computing sciences. Inspired by the <a href=\"cumc.math.ca\">Canadian Undergraduate Mathematics Conference</a>, this four day, bilingual conference will give undergraduate students the unprecedented opportunity to give talks on original research, or topics of their interest to like-minded peers. Keynote talks will be given by esteemed professors and industry speakers exposing students to a breadth of topics in the computational sciences. Students attending the CUCSC 2015 will engage in activities promoting networking, and will attend student talks of their interest in both English and French. This conference will be a valuable academic experience unavailable to students in the traditional classroom setting. Participating students will share knowledge of the computational sciences included but not limited to mathematics, physics, human computer interaction, artificial intelligence, algorithms, data structures, and software engineering.</p>"
					},
					{
						heading: "Conference Values",
						text: "The core values of the CUCSC are to promote undergraduate student research, bilingualism, and gender equality in the computational sciences. Undergraduate research represents an important body of academic research that is often overlooked. As a national conference we place an emphasis on promoting regional diversity, and celebrate both of our country's official languages. We are proud to offer all of our conference literature in both English and French, and give students the opportunity to give and attend talks in both languages. We value the women in the computational sciences, and wish to encourage aspiring young women to pursue an education in one of the most male-dominated industries. We hope that you will join us this July in celebrating the diversity and achievements of Canada's undergraduate computer scientists."
					},
					{
						heading: "An Important Tradition",
						text: "The Canadian Undergraduate Computer Science Conference was co-founded by undergraduate students Abigail Arnold and Yasha Pushak, at UBC Okanagan in 2014. The first conference was held at the University of British Columbia Okanagan in July of 2015. This year, it will be held at the British Columbia Institute of Technology. The CUCSC is a conference organized by students, for students. Our vision is for this conference to be an annual event hosted by a Canadian university every summer. If you are an out-going, undergraduate student at a Canadian university interested in hosting the CUCSC 2017 at your university, we invite you to contact us at <a href=”mailto:info@cucsc.ca”>info@cucsc.ca</a> for more information regarding the conference's organization."
					},
				]
			}
		},
		{
			id: "keynotes",

			content : {
				title: "Keynote Speakers",

				banner: "AboutPhoto.jpg",

				sections: [
					{
						text : "Over the course of the conference students will have the opportunity to attend up to seven plenary presentations given by esteemed professors and representatives of companies in the computer industry. Keynote speakers will come from all areas of the computational sciences, exposing all students to a breadth of topics and applications. "
					}
				]
			}
		},
		{
			id: "program",

			content : {
				title: "Program & Schedule",

				banner: "AboutPhoto.jpg",

				sections: [
					{
						text : "BCIT’s Burnaby Campus will host a four day conference from June 22nd to 25th. The first night of the conference will begin with an opening banquet allowing students to meet and socialize. The following days will contain student talks mixed with up to seven keynote speakers. During the day, students will be provided with complimentary meals and coffee breaks. One of the evenings we will host a ‘Women in Computer Science Dinner’. The other evenings will provide students with the opportunity to explore the campus and the city with their peers or participate in organized activities. A recruitment fair will feature the graduate schools and job opportunities of sponsoring universities and industries. The conference will conclude with a closing banquet and awards for best presentation."
					}
				]
			}
		},
		{
			id: "women",

			content : {
				title: "Women In Computer Science Dinner",

				banner: "AboutPhoto.jpg",

				sections: [
					{
						text : "BCIT’s Burnaby Campus will host a four day conference from June 22nd to 25th. The first night of the conference will begin with an opening banquet allowing students to meet and socialize. The following days will contain student talks mixed with up to seven keynote speakers. During the day, students will be provided with complimentary meals and coffee breaks. One of the evenings we will host a ‘Women in Computer Science Dinner’. The other evenings will provide students with the opportunity to explore the campus and the city with their peers or participate in organized activities. A recruitment fair will feature the graduate schools and job opportunities of sponsoring universities and industries. The conference will conclude with a closing banquet and awards for best presentation."
					}
				]
			}
		},
		{
			id: "committee",

			content : {
				title: "About the Committee",

				banner: "AboutPhoto.jpg",

				sections: [
					{
						text : "The Canadian Undergraduate Computer Science Conference is an event organized by students, for students. Our team is made up primarily of students in the computing diploma or degree program at BCIT."
					}
				]
			}
		},
		{
			id: "sponsors",

			content : {
				title: "Sponsors",

				banner: "AboutPhoto.jpg",

				sections: [
					{
						heading: "Recruitment Fair",
 						text: "The CUCSC will be hosting a recruitment fair to showcase upcoming opportunities at sponsoring organizations. This recruitment fair will be the perfect opportunity for your university's graduate program to attract Canada's top undergraduate researchers. With many students eager to get out and experience the field, your innovative company can show students why there's no better place to work."
					}
				]
			}
		},
		
		{
			id: "register",
			content: { 
				banner: "AboutPhoto.jpg",

				title: "Register",

				fname: "First Name",
				lname: "Last Name",
				email: "Email Address",
				school: "School",
				speaker: "Do you wish to speak at the event?",
				abstractTitle: "Topic",
				abstractText: "Description",
				bursary: "Do you wish to apply for a bursary?",
				residence: "Do you require accommodation during the conference?",
				activity: "Do you want to take part in the group activity?"

			}
		},

		]

	};

	return data;
})