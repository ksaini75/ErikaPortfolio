import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../styles/Resume.css';


class Resume extends Component{
    render(){
        return(
<React.Fragment>
<Container fluid className="Resume" id="Resume">

<h1 className="resumeTitle"> Experience</h1>
<VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{  color: 'black' }}
   
    date="April 2020 - Present"
    iconStyle={{ background: '#e8d3eb', color: 'black' }}

  >
    <h3 className="vertical-timeline-element-title">Intern</h3>
    <h4 className="vertical-timeline-element-subtitle">Remote Location, NY</h4>
    <p>
    NYS Office of Mental Health (OMH) Emotional Support Helpline
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="September 2019 to March 2020 "
    iconStyle={{ background: '#e8d3eb', color: '#fff' }}

  >
    <h3 className="vertical-timeline-element-title">Mental Health Counseling Intern</h3>
    <h4 className="vertical-timeline-element-subtitle">Mount Kisco, NY</h4>
    <p>
    Community Living Corporation
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="May 2019 to August 2019"
    iconStyle={{ background: '#e8d3eb', color: '#fff' }}

  >
    <h3 className="vertical-timeline-element-title">Intern</h3>
    <h4 className="vertical-timeline-element-subtitle">Bronxville, NY</h4>
    <p>
    Gramatan Village
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="August 2018 to March 2020"
    iconStyle={{ background: '#e8d3eb', color: '#fff' }}
   
  >
    <h3 className="vertical-timeline-element-title">Resident Assistant</h3>
    <h4 className="vertical-timeline-element-subtitle">Pleasantville, Pace University</h4>
    <p>
    The Office of Residential Life and Housing
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="April 2016 to May 2018"
    iconStyle={{ background: '#e8d3eb', color: '#fff' }}
   
  >
    <h3 className="vertical-timeline-element-title">Peer Educator</h3>
    <h4 className="vertical-timeline-element-subtitle">Pleasantville, Pace University</h4>
    <p>
    F.I.R.E. (Fighting Ignorance and Rape with Education)
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="January 2017 to May 2017"
    iconStyle={{ background: '#e8d3eb', color: '#fff' }}
 
  >
    <h3 className="vertical-timeline-element-title">Intern</h3>
    <h4 className="vertical-timeline-element-subtitle">Pleasantville, Pace University</h4>
    <p>
    F.I.R.E. (Fighting Ignorance and Rape with Education)
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="September 2017 to December 2017"
    iconStyle={{ background: '#e8d3eb', color: '#fff' }}
 
  >
    <h3 className="vertical-timeline-element-title">Intern</h3>
    <h4 className="vertical-timeline-element-subtitle">Hawthorne, NY</h4>
    <p>
      Hope's Door
    </p>
  </VerticalTimelineElement>

</VerticalTimeline>
</Container>

</React.Fragment>
        )
    }
}

export default Resume;