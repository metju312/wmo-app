import {Component, OnInit} from '@angular/core';
import {Project} from "../../models/project";
import {Role} from "../../models/role";
import {Task} from "../../models/task";
import {Product} from "../../models/product";

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  public projectsList: Array<Project> = [];
  public project: Project = new Project();
  public roles: Array<Role> = [];
  public tasks: Array<Task> = [];
  public products: Array<Product> = [];


  ngOnInit(): void {
    this.roles = [{
      name: "Process Engineer",
      validity: "optional"
    },{
      name: "	Technical Writer",
      validity: "optional"
    },{
      name: "Tool Specialist",
      validity: "optional"
    },{
      name: "Change Control Manager",
      validity: "optional"
    },{
      name: "Configuration Manager",
      validity: "optional"
    },{
      name: "Integrator",
      validity: "optional"
    },{
      name: "Management Reviewer",
      validity: "optional"
    },{
      name: "Project Manager",
      validity: "optional"
    },{
      name: "Review Coordinator",
      validity: "optional"
    },{
      name: "Reviewer",
      validity: "optional"
    },{
      name: "System Administrator",
      validity: "optional"
    },{
      name: "System Analyst",
      validity: "optional"
    },{
      name: "Technical Reviewer",
      validity: "optional"
    },{
      name: "	Test Analyst",
      validity: "optional"
    },{
      name: "Business Architect",
      validity: "optional"
    },{
      name: "Business Designer",
      validity: "optional"
    },{
      name: "Business-Process Analyst",
      validity: "optional"
    },{
      name: "Capsule Designer",
      validity: "optional"
    },{
      name: "Database Designer",
      validity: "optional"
    },{
      name: "Designer",
      validity: "optional"
    },{
      name: "Implementer",
      validity: "optional"
    },{
      name: "Integrator",
      validity: "optional"
    },{
      name: "Security Architect",
      validity: "optional"
    },{
      name: "Software Architect",
      validity: "optional"
    },{
      name: "Technical Reviewer",
      validity: "optional"
    },{
      name: "Test Designer",
      validity: "optional"
    },{
      name: "User-Interface Designer",
      validity: "optional"
    },{
      name: "Test Manager",
      validity: "optional"
    },{
      name: "Tester",
      validity: "optional"
    },{
      name: "Course Developer",
      validity: "optional"
    },{
      name: "Graphic Artist",
      validity: "optional"
    },{
      name: "Deployment Manager",
      validity: "optional"
    }];

    this.tasks = [{
      name: "Develop Development Case",
      validity: "optional"
    },{
      name: "Launch Development Process",
      validity: "optional"
    },{
      name: "Prepare Guidelines for the Project",
      validity: "optional"
    },{
      name: "Prepare Templates for the Project",
      validity: "optional"
    },{
      name: "Develop Manual Styleguide",
      validity: "optional"
    },{
      name: "Set Up Tools",
      validity: "optional"
    },{
      name: "Verify Tool Configuration and Installation",
      validity: "optional"
    },{
      name: "Create Development Workspace",
      validity: "optional"
    },{
      name: "Deliver Changes",
      validity: "optional"
    },{
      name: "Make Changes",
      validity: "optional"
    },{
      name: "Submit Change Request",
      validity: "optional"
    },{
      name: "Update Change Request",
      validity: "optional"
    },{
      name: "Update Workspace",
      validity: "optional"
    },{
      name: "Confirm Duplicate or Rejected CR",
      validity: "optional"
    },{
      name: "Review Change Requests",
      validity: "optional"
    },{
      name: "Create Deployment Unit",
      validity: "optional"
    },{
      name: "Perform Configuration Audit",
      validity: "optional"
    },{
      name: "Report on Configuration Status",
      validity: "optional"
    },{
      name: "Create Baselines",
      validity: "optional"
    },{
      name: "Promote Baselines",
      validity: "optional"
    },{
      name: "Iteration Acceptance Review",
      validity: "optional"
    },{
      name: "Iteration Evaluation Criteria Review",
      validity: "optional"
    },{
      name: "Project Review Authority (PRA) Project Review",
      validity: "optional"
    },{
      name: "Acquire Staff",
      validity: "optional"
    },{
      name: "Assess Iteration",
      validity: "optional"
    },{
      name: "Handle Exceptions and Problems",
      validity: "optional"
    },{
      name: "Identify and Assess Risks",
      validity: "optional"
    },{
      name: "Initiate Iteration",
      validity: "optional"
    },{
      name: "Monitor Project Status",
      validity: "optional"
    },{
      name: "Report Status",
      validity: "optional"
    },{
      name: "Schedule and Assign Work",
      validity: "optional"
    },{
      name: "Organize Review",
      validity: "optional"
    },{
      name: "Conduct Review",
      validity: "optional"
    },{
      name: "Support Development",
      validity: "optional"
    },{
      name: "Manage Dependencies",
      validity: "optional"
    },{
      name: "Structure the Use-Case Model",
      validity: "optional"
    },{
      name: "Review Requirements",
      validity: "optional"
    },{
      name: "Verify Changes in Build",
      validity: "optional"
    },{
      name: "Functional Area Analysis",
      validity: "optional"
    },{
      name: "Identify and Associate Services to Goals",
      validity: "optional"
    },{
      name: "Identify Business Goals and KPIs",
      validity: "optional"
    },{
      name: "Refine a Business Use-Case",
      validity: "optional"
    },{
      name: "Business Process Analysis",
      validity: "optional"
    },{
      name: "Business Rule Analysis",
      validity: "optional"
    },{
      name: "Functional Area Analysis",
      validity: "optional"
    },{
      name: "Capsule Design",
      validity: "optional"
    },{
      name: "Database Design",
      validity: "optional"
    },{
      name: "Specify Data Migration",
      validity: "optional"
    },{
      name: "Data Model Analysis",
      validity: "optional"
    },{
      name: "Message Design",
      validity: "optional"
    },{
      name: "Class Design",
      validity: "optional"
    },{
      name: "Component Specification (SOA)",
      validity: "optional"
    },{
      name: "Design Testability Elements",
      validity: "optional"
    },{
      name: "Document Service Realization Decisions",
      validity: "optional"
    },{
      name: "Identify and Associate Services to Goals",
      validity: "optional"
    },{
      name: "Operation Analysis",
      validity: "optional"
    },{
      name: "Operation Design",
      validity: "optional"
    },{
      name: "Service Specification",
      validity: "optional"
    },{
      name: "Subsystem Design",
      validity: "optional"
    },{
      name: "Subsystem Design (SOA)",
      validity: "optional"
    },{
      name: "Use-Case Analysis",
      validity: "optional"
    },{
      name: "Use-Case Design",
      validity: "optional"
    },{
      name: "Apply Services Litmus Tests",
      validity: "optional"
    },{
      name: "Business Use Case Analysis (SOA)",
      validity: "optional"
    },{
      name: "Existing Asset Analysis",
      validity: "optional"
    },{
      name: "Analyze Runtime Behavior",
      validity: "optional"
    },{
      name: "Execute Developer Tests",
      validity: "optional"
    },{
      name: "Implement Design Elements",
      validity: "optional"
    },{
      name: "Implement Developer Test",
      validity: "optional"
    },{
      name: "Implement Testability Elements",
      validity: "optional"
    },{
      name: "Component Specification (SOA)",
      validity: "optional"
    },{
      name: "Document Service Realization Decisions",
      validity: "optional"
    },{
      name: "Plan Subsystem Integration",
      validity: "optional"
    },{
      name: "Identify Security Patterns",
      validity: "optional"
    },{
      name: "Assess Viability of Architectural Proof-of-Concept",
      validity: "optional"
    },{
      name: "Construct Architectural Proof-of-Concept (SOA)",
      validity: "optional"
    },{
      name: "Identify Design Elements",
      validity: "optional"
    },{
      name: "Define Testability Elements",
      validity: "optional"
    },{
      name: "Design the User Interface",
      validity: "optional"
    },{
      name: "Prototype the User-Interface",
      validity: "optional"
    },{
      name: "Integrate Subsystem",
      validity: "optional"
    },{
      name: "Integrate System",
      validity: "optional"
    },{
      name: "Define Assessment and Traceability Needs",
      validity: "optional"
    },{
      name: "Define Test Details",
      validity: "optional"
    },{
      name: "Determine Test Results",
      validity: "optional"
    },{
      name: "Identify Test Ideas",
      validity: "optional"
    },{
      name: "Define Test Approach",
      validity: "optional"
    },{
      name: "Define Test Environment Configurations",
      validity: "optional"
    },{
      name: "Identify Testability Mechanisms",
      validity: "optional"
    },{
      name: "Structure the Test Implementation",
      validity: "optional"
    },{
      name: "Assess and Advocate Quality",
      validity: "optional"
    },{
      name: "Assess and Improve Test Effort",
      validity: "optional"
    },{
      name: "Obtain Testability Commitment",
      validity: "optional"
    },{
      name: "Analyze Test Failure",
      validity: "optional"
    },{
      name: "Execute Test Suite",
      validity: "optional"
    },{
      name: "Implement Test",
      validity: "optional"
    },{
      name: "Implement Test Suite",
      validity: "optional"
    },{
      name: "Develop Training Materials",
      validity: "optional"
    },{
      name: "Create Product Artwork",
      validity: "optional"
    },{
      name: "Develop Installation Work Products ",
      validity: "optional"
    },{
      name: "Develop Support Materials",
      validity: "optional"
    },{
      name: "Iteration Plan Review",
      validity: "optional"
    },{
      name: "Develop Business Case",
      validity: "optional"
    },{
      name: "Develop Iteration Plan",
      validity: "optional"
    },{
      name: "Write Release Notes",
      validity: "optional"
    }];


    this.products = [{
      name: "Development Case",
      validity: "optional"
    },{
      name: "Development Process",
      validity: "optional"
    },{
      name: "Project-Specific Guidelines",
      validity: "optional"
    },{
      name: "Project-Specific Templates",
      validity: "optional"
    },{
      name: "Change Request",
      validity: "optional"
    }];



    //this.project.roles.push({name: '', validity:''});






    // var projects = [{
    //   id: 1,
    //   name: "Project 1",
    //   description: "Opis projektu 1",
    //   products: [{
    //     name: "Nazwa produktu 1",
    //     description: "Opis produktu 1"
    //   }],
    //   tasks: [{
    //     name: "Nazwa zadania 1",
    //     description: "Opis zadanina 1"
    //   }],
    //   roles: [{
    //     name: "Nazwa roli 1",
    //     description: "Opis roli 1"
    //   }]
    // }];
    //this.projectsList.push(projects);
  }

  displayedColumns = ['name'];
  dataSource = ELEMENT_DATA;
}

export interface Element {
  name: string;
}

const ELEMENT_DATA: Element[] = [
  {name: 'Project 1'},
  {name: 'Project 2'},
  {name: 'Project 3'},
  {name: 'Project 4'},
  {name: 'Project 5'},
  {name: 'Project 6'},
  {name: 'Project 7'},
  {name: 'Project 8'},
  {name: 'Project 9'},
  {name: 'Project 10'},
  {name: 'Project 11'},
  {name: 'Project 12'},
  {name: 'Project 13'}
];
