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
      validity: "required"
    },{
      name: "	Technical Writer",
      validity: "required"
    },{
      name: "Tool Specialist",
      validity: "required"
    },{
      name: "Change Control Manager",
      validity: "required"
    },{
      name: "Configuration Manager",
      validity: "required"
    },{
      name: "Integrator",
      validity: "required"
    },{
      name: "Management Reviewer",
      validity: "required"
    },{
      name: "Project Manager",
      validity: "required"
    },{
      name: "Review Coordinator",
      validity: "required"
    },{
      name: "Reviewer",
      validity: "required"
    },{
      name: "System Administrator",
      validity: "required"
    },{
      name: "System Analyst",
      validity: "required"
    },{
      name: "Technical Reviewer",
      validity: "required"
    },{
      name: "	Test Analyst",
      validity: "required"
    },{
      name: "Business Architect",
      validity: "required"
    },{
      name: "Business Designer",
      validity: "required"
    },{
      name: "Business-Process Analyst",
      validity: "required"
    },{
      name: "Capsule Designer",
      validity: "required"
    },{
      name: "Database Designer",
      validity: "required"
    },{
      name: "Designer",
      validity: "required"
    },{
      name: "Implementer",
      validity: "required"
    },{
      name: "Integrator",
      validity: "required"
    },{
      name: "Security Architect",
      validity: "required"
    },{
      name: "Software Architect",
      validity: "required"
    },{
      name: "Technical Reviewer",
      validity: "required"
    },{
      name: "Test Designer",
      validity: "required"
    },{
      name: "User-Interface Designer",
      validity: "required"
    },{
      name: "Test Manager",
      validity: "required"
    },{
      name: "Tester",
      validity: "required"
    },{
      name: "Course Developer",
      validity: "required"
    },{
      name: "Graphic Artist",
      validity: "required"
    },{
      name: "Deployment Manager",
      validity: "required"
    }];

    this.tasks = [{
      name: "Develop Development Case",
      validity: "required"
    },{
      name: "Launch Development Process",
      validity: "required"
    },{
      name: "Prepare Guidelines for the Project",
      validity: "required"
    },{
      name: "Prepare Templates for the Project",
      validity: "required"
    },{
      name: "Develop Manual Styleguide",
      validity: "required"
    },{
      name: "Set Up Tools",
      validity: "required"
    },{
      name: "Verify Tool Configuration and Installation",
      validity: "required"
    },{
      name: "Create Development Workspace",
      validity: "required"
    },{
      name: "Deliver Changes",
      validity: "required"
    },{
      name: "Make Changes",
      validity: "required"
    },{
      name: "Submit Change Request",
      validity: "required"
    },{
      name: "Update Change Request",
      validity: "required"
    },{
      name: "Update Workspace",
      validity: "required"
    },{
      name: "Confirm Duplicate or Rejected CR",
      validity: "required"
    },{
      name: "Review Change Requests",
      validity: "required"
    },{
      name: "Create Deployment Unit",
      validity: "required"
    },{
      name: "Perform Configuration Audit",
      validity: "required"
    },{
      name: "Report on Configuration Status",
      validity: "required"
    },{
      name: "Create Baselines",
      validity: "required"
    },{
      name: "Promote Baselines",
      validity: "required"
    },{
      name: "Iteration Acceptance Review",
      validity: "required"
    },{
      name: "Iteration Evaluation Criteria Review",
      validity: "required"
    },{
      name: "Project Review Authority (PRA) Project Review",
      validity: "required"
    },{
      name: "Acquire Staff",
      validity: "required"
    },{
      name: "Assess Iteration",
      validity: "required"
    },{
      name: "Handle Exceptions and Problems",
      validity: "required"
    },{
      name: "Identify and Assess Risks",
      validity: "required"
    },{
      name: "Initiate Iteration",
      validity: "required"
    },{
      name: "Monitor Project Status",
      validity: "required"
    },{
      name: "Report Status",
      validity: "required"
    },{
      name: "Schedule and Assign Work",
      validity: "required"
    },{
      name: "Organize Review",
      validity: "required"
    },{
      name: "Conduct Review",
      validity: "required"
    },{
      name: "Support Development",
      validity: "required"
    },{
      name: "Manage Dependencies",
      validity: "required"
    },{
      name: "Structure the Use-Case Model",
      validity: "required"
    },{
      name: "Review Requirements",
      validity: "required"
    },{
      name: "Verify Changes in Build",
      validity: "required"
    },{
      name: "Functional Area Analysis",
      validity: "required"
    },{
      name: "Identify and Associate Services to Goals",
      validity: "required"
    },{
      name: "Identify Business Goals and KPIs",
      validity: "required"
    },{
      name: "Refine a Business Use-Case",
      validity: "required"
    },{
      name: "Business Process Analysis",
      validity: "required"
    },{
      name: "Business Rule Analysis",
      validity: "required"
    },{
      name: "Functional Area Analysis",
      validity: "required"
    },{
      name: "Capsule Design",
      validity: "required"
    },{
      name: "Database Design",
      validity: "required"
    },{
      name: "Specify Data Migration",
      validity: "required"
    },{
      name: "Data Model Analysis",
      validity: "required"
    },{
      name: "Message Design",
      validity: "required"
    },{
      name: "Class Design",
      validity: "required"
    },{
      name: "Component Specification (SOA)",
      validity: "required"
    },{
      name: "Design Testability Elements",
      validity: "required"
    },{
      name: "Document Service Realization Decisions",
      validity: "required"
    },{
      name: "Identify and Associate Services to Goals",
      validity: "required"
    },{
      name: "Operation Analysis",
      validity: "required"
    },{
      name: "Operation Design",
      validity: "required"
    },{
      name: "Service Specification",
      validity: "required"
    },{
      name: "Subsystem Design",
      validity: "required"
    },{
      name: "Subsystem Design (SOA)",
      validity: "required"
    },{
      name: "Use-Case Analysis",
      validity: "required"
    },{
      name: "Use-Case Design",
      validity: "required"
    },{
      name: "Apply Services Litmus Tests",
      validity: "required"
    },{
      name: "Business Use Case Analysis (SOA)",
      validity: "required"
    },{
      name: "Existing Asset Analysis",
      validity: "required"
    },{
      name: "Analyze Runtime Behavior",
      validity: "required"
    },{
      name: "Execute Developer Tests",
      validity: "required"
    },{
      name: "Implement Design Elements",
      validity: "required"
    },{
      name: "Implement Developer Test",
      validity: "required"
    },{
      name: "Implement Testability Elements",
      validity: "required"
    },{
      name: "Component Specification (SOA)",
      validity: "required"
    },{
      name: "Document Service Realization Decisions",
      validity: "required"
    },{
      name: "Plan Subsystem Integration",
      validity: "required"
    },{
      name: "Identify Security Patterns",
      validity: "required"
    },{
      name: "Assess Viability of Architectural Proof-of-Concept",
      validity: "required"
    },{
      name: "Construct Architectural Proof-of-Concept (SOA)",
      validity: "required"
    },{
      name: "Identify Design Elements",
      validity: "required"
    },{
      name: "Define Testability Elements",
      validity: "required"
    },{
      name: "Design the User Interface",
      validity: "required"
    },{
      name: "Prototype the User-Interface",
      validity: "required"
    },{
      name: "Integrate Subsystem",
      validity: "required"
    },{
      name: "Integrate System",
      validity: "required"
    },{
      name: "Define Assessment and Traceability Needs",
      validity: "required"
    },{
      name: "Define Test Details",
      validity: "required"
    },{
      name: "Determine Test Results",
      validity: "required"
    },{
      name: "Identify Test Ideas",
      validity: "required"
    },{
      name: "Define Test Approach",
      validity: "required"
    },{
      name: "Define Test Environment Configurations",
      validity: "required"
    },{
      name: "Identify Testability Mechanisms",
      validity: "required"
    },{
      name: "Structure the Test Implementation",
      validity: "required"
    },{
      name: "Assess and Advocate Quality",
      validity: "required"
    },{
      name: "Assess and Improve Test Effort",
      validity: "required"
    },{
      name: "Obtain Testability Commitment",
      validity: "required"
    },{
      name: "Analyze Test Failure",
      validity: "required"
    },{
      name: "Execute Test Suite",
      validity: "required"
    },{
      name: "Implement Test",
      validity: "required"
    },{
      name: "Implement Test Suite",
      validity: "required"
    },{
      name: "Develop Training Materials",
      validity: "required"
    },{
      name: "Create Product Artwork",
      validity: "required"
    },{
      name: "Develop Installation Work Products ",
      validity: "required"
    },{
      name: "Develop Support Materials",
      validity: "required"
    },{
      name: "Iteration Plan Review",
      validity: "required"
    },{
      name: "Develop Business Case",
      validity: "required"
    },{
      name: "Develop Iteration Plan",
      validity: "required"
    },{
      name: "Write Release Notes",
      validity: "required"
    }];


    this.products = [{
      name: "Development Case",
      validity: "required"
    },{
      name: "Development Process",
      validity: "required"
    },{
      name: "Project-Specific Guidelines",
      validity: "required"
    },{
      name: "Project-Specific Templates",
      validity: "required"
    },{
      name: "Change Request",
      validity: "required"
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
