import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../styles/Resume.css';


class Experience extends Component{
    render(){
        return(
<React.Fragment>

<Container fluid className="Resume" id ="experience">

<h1 className="resumeTitle"> Experience</h1>
<VerticalTimeline>
  <VerticalTimelineElement
    className="work-date"
    contentStyle={{  color: 'black' }}
   
    date="April 2020 - Present"
    iconStyle={{ background: '#e8d3eb', color: 'black' }}

  >
    <h3 className="vertical-timeline-element-title"> Intern</h3>
    <h4 className="vertical-timeline-element-subtitle">
    NYS Office of Mental Health (OMH) Emotional Support Helpline
    <br/>
    Remote Location, NY
    </h4>
   
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="work-date"
    date="September 2019 to March 2020 "
    iconStyle={{ background: '#e8d3eb', color: '#fff' }}

  >
    <h3 className="vertical-timeline-element-title">Mental Health Counseling Intern</h3>
    <h4 className="vertical-timeline-element-subtitle">
    Community Living Corporation
    <br/>
    Mount Kisco, NY
    </h4>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="work-date"
    date="May 2019 to August 2019"
    iconStyle={{ background: '#e8d3eb', color: '#fff' }}

  >
    <h3 className="vertical-timeline-element-title">Intern</h3>
    <h4 className="vertical-timeline-element-subtitle">
    Gramatan Village
    <br/>
   Bronxville, NY
    </h4>
    
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="work-date"
    date="August 2018 to March 2020"
    iconStyle={{ background: '#e8d3eb', color: '#fff' }}
   
  >
    <h3 className="vertical-timeline-element-title">Resident Assistant</h3>
    <h4 className="vertical-timeline-element-subtitle">
    The Office of Residential Life and Housing
    <br/>
    Pleasantville, Pace University
    </h4>

  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="work-date"
    date="April 2016 to May 2018"
    iconStyle={{ background: '#e8d3eb', color: '#fff' }}
   
  >
    <h3 className="vertical-timeline-element-title">Peer Educator</h3>
    <h4 className="vertical-timeline-element-subtitle">
    F.I.R.E. (Fighting Ignorance and Rape with Education)
    <br/>
    Pleasantville, Pace University
    </h4>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="work-date"
    date="January 2017 to May 2017"
    iconStyle={{ background: '#e8d3eb', color: '#fff' }}
 
  >
    <h3 className="vertical-timeline-element-title">Intern</h3>
    <h4 className="vertical-timeline-element-subtitle">
    F.I.R.E. (Fighting Ignorance and Rape with Education)
    <br/>
    Pleasantville, Pace University
    
    </h4>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="work-date"
    date="September 2017 to December 2017"
    iconStyle={{ background: '#e8d3eb', color: '#fff' }}
 
  >
    <h3 className="vertical-timeline-element-title">Intern</h3>
    <h4 className="vertical-timeline-element-subtitle">
    Hope's Door
    <br/>
    Hawthorne, NY
    </h4>
  </VerticalTimelineElement>

</VerticalTimeline>
</Container>

</React.Fragment>
        )
    }
}

export default Experience;