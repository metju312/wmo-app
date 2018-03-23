import {Component, OnInit} from '@angular/core';
import {Project} from "../../models/project";
import {Role} from "../../models/role";
import {Task} from "../../models/task";
import {Product} from "../../models/product";
import {ProjectDataStorage} from '../../services/projectDataStorage';
import {Router} from "@angular/router";

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  public project: Project = new Project();
  public roles: Array<Role> = [];
  public tasks: Array<Task> = [];
  public products: Array<Product> = [];
  public compareList: Array<any>;
  projects: Array<any>;

  constructor(private projectStorage: ProjectDataStorage,
              private router: Router,) {
    this.projectStorage.saveUserData(ELEMENT_DATA);
    this.projects = this.projectStorage.getUserData();
    this.compareList = [false, false, false, false, false, false, false, false, false, false];
  }

  checked(i: number) {
    this.compareList[i] = !this.compareList[i];
    this.projectStorage.saveChosenList(this.compareList);

  };

  compare() {
    this.router.navigate(['/comparison'])
  }

  showDetails(chosenProject: number) {
    this.projectStorage.saveDetail(chosenProject);
    this.router.navigate(['/detail'])
  }

  ngOnInit(): void {
    // for(let checkbox of this.compareList){
    //   checkbox = false;
    // }
    this.roles = [
      {
        name: "Process Engineer",
        validity: "optional"
      }, {
        name: "Technical Writer",
        validity: "optional"
      }, {
        name: "Tool Specialist",
        validity: "optional"
      }, {
        name: "Change Control Manager",
        validity: "optional"
      }, {
        name: "Configuration Manager",
        validity: "optional"
      }, {
        name: "Integrator",
        validity: "optional"
      }, {
        name: "Management Reviewer",
        validity: "optional"
      }, {
        name: "Project Manager",
        validity: "optional"
      }, {
        name: "Review Coordinator",
        validity: "optional"
      }, {
        name: "Reviewer",
        validity: "optional"
      }, {
        name: "System Administrator",
        validity: "optional"
      }, {
        name: "System Analyst",
        validity: "optional"
      }, {
        name: "Technical Reviewer",
        validity: "optional"
      }, {
        name: "Test Analyst",
        validity: "optional"
      }, {
        name: "Business Architect",
        validity: "optional"
      }, {
        name: "Business Designer",
        validity: "optional"
      }, {
        name: "Business-Process Analyst",
        validity: "optional"
      }, {
        name: "Capsule Designer",
        validity: "optional"
      }, {
        name: "Database Designer",
        validity: "optional"
      }, {
        name: "Designer",
        validity: "optional"
      }, {
        name: "Implementer",
        validity: "optional"
      }, {
        name: "Integrator",
        validity: "optional"
      }, {
        name: "Security Architect",
        validity: "optional"
      }, {
        name: "Software Architect",
        validity: "optional"
      }, {
        name: "Technical Reviewer",
        validity: "optional"
      }, {
        name: "Test Designer",
        validity: "optional"
      }, {
        name: "User-Interface Designer",
        validity: "optional"
      }, {
        name: "Test Manager",
        validity: "optional"
      }, {
        name: "Tester",
        validity: "optional"
      }, {
        name: "Course Developer",
        validity: "optional"
      }, {
        name: "Graphic Artist",
        validity: "optional"
      }, {
        name: "Deployment Manager",
        validity: "optional"
      }];

    this.tasks = [
      {
        name: "Develop Development Case",
        validity: "optional"
      }, {
        name: "Launch Development Process",
        validity: "optional"
      }, {
        name: "Prepare Guidelines for the Project",
        validity: "optional"
      }, {
        name: "Prepare Templates for the Project",
        validity: "optional"
      }, {
        name: "Develop Manual Styleguide",
        validity: "optional"
      }, {
        name: "Set Up Tools",
        validity: "optional"
      }, {
        name: "Verify Tool Configuration and Installation",
        validity: "optional"
      }, {
        name: "Create Development Workspace",
        validity: "optional"
      }, {
        name: "Deliver Changes",
        validity: "optional"
      }, {
        name: "Make Changes",
        validity: "optional"
      }, {
        name: "Submit Change Request",
        validity: "optional"
      }, {
        name: "Update Change Request",
        validity: "optional"
      }, {
        name: "Update Workspace",
        validity: "optional"
      }, {
        name: "Confirm Duplicate or Rejected CR",
        validity: "optional"
      }, {
        name: "Review Change Requests",
        validity: "optional"
      }, {
        name: "Create Deployment Unit",
        validity: "optional"
      }, {
        name: "Perform Configuration Audit",
        validity: "optional"
      }, {
        name: "Report on Configuration Status",
        validity: "optional"
      }, {
        name: "Create Baselines",
        validity: "optional"
      }, {
        name: "Promote Baselines",
        validity: "optional"
      }, {
        name: "Iteration Acceptance Review",
        validity: "optional"
      }, {
        name: "Iteration Evaluation Criteria Review",
        validity: "optional"
      }, {
        name: "Project Review Authority (PRA) Project Review",
        validity: "optional"
      }, {
        name: "Acquire Staff",
        validity: "optional"
      }, {
        name: "Assess Iteration",
        validity: "optional"
      }, {
        name: "Handle Exceptions and Problems",
        validity: "optional"
      }, {
        name: "Identify and Assess Risks",
        validity: "optional"
      }, {
        name: "Initiate Iteration",
        validity: "optional"
      }, {
        name: "Monitor Project Status",
        validity: "optional"
      }, {
        name: "Report Status",
        validity: "optional"
      }, {
        name: "Schedule and Assign Work",
        validity: "optional"
      }, {
        name: "Organize Review",
        validity: "optional"
      }, {
        name: "Conduct Review",
        validity: "optional"
      }, {
        name: "Support Development",
        validity: "optional"
      }, {
        name: "Manage Dependencies",
        validity: "optional"
      }, {
        name: "Structure the Use-Case Model",
        validity: "optional"
      }, {
        name: "Review Requirements",
        validity: "optional"
      }, {
        name: "Verify Changes in Build",
        validity: "optional"
      }, {
        name: "Functional Area Analysis",
        validity: "optional"
      }, {
        name: "Identify and Associate Services to Goals",
        validity: "optional"
      }, {
        name: "Identify Business Goals and KPIs",
        validity: "optional"
      }, {
        name: "Refine a Business Use-Case",
        validity: "optional"
      }, {
        name: "Business Process Analysis",
        validity: "optional"
      }, {
        name: "Business Rule Analysis",
        validity: "optional"
      }, {
        name: "Functional Area Analysis",
        validity: "optional"
      }, {
        name: "Capsule Design",
        validity: "optional"
      }, {
        name: "Database Design",
        validity: "optional"
      }, {
        name: "Specify Data Migration",
        validity: "optional"
      }, {
        name: "Data Model Analysis",
        validity: "optional"
      }, {
        name: "Message Design",
        validity: "optional"
      }, {
        name: "Class Design",
        validity: "optional"
      }, {
        name: "Component Specification (SOA)",
        validity: "optional"
      }, {
        name: "Design Testability Elements",
        validity: "optional"
      }, {
        name: "Document Service Realization Decisions",
        validity: "optional"
      }, {
        name: "Identify and Associate Services to Goals",
        validity: "optional"
      }, {
        name: "Operation Analysis",
        validity: "optional"
      }, {
        name: "Operation Design",
        validity: "optional"
      }, {
        name: "Service Specification",
        validity: "optional"
      }, {
        name: "Subsystem Design",
        validity: "optional"
      }, {
        name: "Subsystem Design (SOA)",
        validity: "optional"
      }, {
        name: "Use-Case Analysis",
        validity: "optional"
      }, {
        name: "Use-Case Design",
        validity: "optional"
      }, {
        name: "Apply Services Litmus Tests",
        validity: "optional"
      }, {
        name: "Business Use Case Analysis (SOA)",
        validity: "optional"
      }, {
        name: "Existing Asset Analysis",
        validity: "optional"
      }, {
        name: "Analyze Runtime Behavior",
        validity: "optional"
      }, {
        name: "Execute Developer Tests",
        validity: "optional"
      }, {
        name: "Implement Design Elements",
        validity: "optional"
      }, {
        name: "Implement Developer Test",
        validity: "optional"
      }, {
        name: "Implement Testability Elements",
        validity: "optional"
      }, {
        name: "Component Specification (SOA)",
        validity: "optional"
      }, {
        name: "Document Service Realization Decisions",
        validity: "optional"
      }, {
        name: "Plan Subsystem Integration",
        validity: "optional"
      }, {
        name: "Identify Security Patterns",
        validity: "optional"
      }, {
        name: "Assess Viability of Architectural Proof-of-Concept",
        validity: "optional"
      }, {
        name: "Construct Architectural Proof-of-Concept (SOA)",
        validity: "optional"
      }, {
        name: "Identify Design Elements",
        validity: "optional"
      }, {
        name: "Define Testability Elements",
        validity: "optional"
      }, {
        name: "Design the User Interface",
        validity: "optional"
      }, {
        name: "Prototype the User-Interface",
        validity: "optional"
      }, {
        name: "Integrate Subsystem",
        validity: "optional"
      }, {
        name: "Integrate System",
        validity: "optional"
      }, {
        name: "Define Assessment and Traceability Needs",
        validity: "optional"
      }, {
        name: "Define Test Details",
        validity: "optional"
      }, {
        name: "Determine Test Results",
        validity: "optional"
      }, {
        name: "Identify Test Ideas",
        validity: "optional"
      }, {
        name: "Define Test Approach",
        validity: "optional"
      }, {
        name: "Define Test Environment Configurations",
        validity: "optional"
      }, {
        name: "Identify Testability Mechanisms",
        validity: "optional"
      }, {
        name: "Structure the Test Implementation",
        validity: "optional"
      }, {
        name: "Assess and Advocate Quality",
        validity: "optional"
      }, {
        name: "Assess and Improve Test Effort",
        validity: "optional"
      }, {
        name: "Obtain Testability Commitment",
        validity: "optional"
      }, {
        name: "Analyze Test Failure",
        validity: "optional"
      }, {
        name: "Execute Test Suite",
        validity: "optional"
      }, {
        name: "Implement Test",
        validity: "optional"
      }, {
        name: "Implement Test Suite",
        validity: "optional"
      }, {
        name: "Develop Training Materials",
        validity: "optional"
      }, {
        name: "Create Product Artwork",
        validity: "optional"
      }, {
        name: "Develop Installation Work Products ",
        validity: "optional"
      }, {
        name: "Develop Support Materials",
        validity: "optional"
      }, {
        name: "Iteration Plan Review",
        validity: "optional"
      }, {
        name: "Develop Business Case",
        validity: "optional"
      }, {
        name: "Develop Iteration Plan",
        validity: "optional"
      }, {
        name: "Write Release Notes",
        validity: "optional"
      }];

    this.products = [
      {
        name: "Development Case",
        validity: "optional"
      }, {
        name: "Development Process",
        validity: "optional"
      }, {
        name: "Project-Specific Guidelines",
        validity: "optional"
      }, {
        name: "Project-Specific Templates",
        validity: "optional"
      }, {
        name: "Change Request",
        validity: "optional"
      }, {
        name: "Manual Styleguide",
        validity: "optional"
      }, {
        name: "Tools",
        validity: "optional"
      }, {
        name: "Design Class",
        validity: "optional"
      }, {
        name: "Workspace",
        validity: "optional"
      }, {
        name: "Project Repository",
        validity: "optional"
      }, {
        name: "Configuration Audit Findings",
        validity: "optional"
      }, {
        name: "Configuration Management Plan",
        validity: "optional"
      }, {
        name: "Deployment Unit",
        validity: "optional"
      }, {
        name: "Project Measurements",
        validity: "optional"
      }, {
        name: "Build",
        validity: "optional"
      }, {
        name: "Review Record",
        validity: "optional"
      }, {
        name: "Business Case",
        validity: "optional"
      }, {
        name: "Issues List",
        validity: "optional"
      }, {
        name: "Iteration Assessment",
        validity: "optional"
      }, {
        name: "Iteration Plan",
        validity: "optional"
      }, {
        name: "Measurement Plan",
        validity: "optional"
      }, {
        name: "Problem Resolution Plan",
        validity: "optional"
      }, {
        name: "Product Acceptance Plan",
        validity: "optional"
      }, {
        name: "Quality Assurance Plan",
        validity: "optional"
      }, {
        name: "Risk List",
        validity: "optional"
      }, {
        name: "Risk Management Plan",
        validity: "optional"
      }, {
        name: "Software Development Plan",
        validity: "optional"
      }, {
        name: "Status Assessment",
        validity: "optional"
      }, {
        name: "Work Order",
        validity: "optional"
      }, {
        name: "Development Infrastructure",
        validity: "optional"
      }, {
        name: "Glossary",
        validity: "optional"
      }, {
        name: "Requirements Attributes",
        validity: "optional"
      }, {
        name: "Requirements Management Plan",
        validity: "optional"
      }, {
        name: "Stakeholder Requests",
        validity: "optional"
      }, {
        name: "Storyboard",
        validity: "optional"
      }, {
        name: "Supplementary Specifications",
        validity: "optional"
      }, {
        name: "Use-Case Model",
        validity: "optional"
      }, {
        name: "Use-Case Package",
        validity: "optional"
      }, {
        name: "Vision",
        validity: "optional"
      }, {
        name: "Test Results",
        validity: "optional"
      }, {
        name: "Actor",
        validity: "optional"
      }, {
        name: "Analysis Class",
        validity: "optional"
      }, {
        name: "Analysis Model",
        validity: "optional"
      }, {
        name: "Architectural Proof-of-Concept",
        validity: "optional"
      }, {
        name: "Business Analysis Model",
        validity: "optional"
      }, {
        name: "Business Domain",
        validity: "optional"
      }, {
        name: "Business Architecture Document",
        validity: "optional"
      }, {
        name: "Business Goal",
        validity: "optional"
      }, {
        name: "Business Use Case Model",
        validity: "optional"
      }, {
        name: "Business Vision",
        validity: "optional"
      }, {
        name: "Data Migration Specification",
        validity: "optional"
      }, {
        name: "Data Model",
        validity: "optional"
      }, {
        name: "Deployment Model",
        validity: "optional"
      }, {
        name: "Design Model",
        validity: "optional"
      }, {
        name: "Developer Test",
        validity: "optional"
      }, {
        name: "Goal-Service Model",
        validity: "optional"
      }, {
        name: "Implementation Element",
        validity: "optional"
      }, {
        name: "Implementation Model",
        validity: "optional"
      }, {
        name: "Implementation Subsystem",
        validity: "optional"
      }, {
        name: "Integration Build Plan",
        validity: "optional"
      }, {
        name: "Navigation Map",
        validity: "optional"
      }, {
        name: "Reference Architecture",
        validity: "optional"
      }, {
        name: "Service Model",
        validity: "optional"
      }, {
        name: "Software Architecture Document",
        validity: "optional"
      }, {
        name: "Software Requirement",
        validity: "optional"
      }, {
        name: "Supplementary Business Specification",
        validity: "optional"
      }, {
        name: "Testability Element",
        validity: "optional"
      }, {
        name: "Test Automation Architecture",
        validity: "optional"
      }, {
        name: "Test Case",
        validity: "optional"
      }, {
        name: "Test Data",
        validity: "optional"
      }, {
        name: "Test Interface Specification",
        validity: "optional"
      }, {
        name: "Test Log",
        validity: "optional"
      }, {
        name: "Test Strategy",
        validity: "optional"
      }, {
        name: "Test Stub",
        validity: "optional"
      }, {
        name: "Use Case",
        validity: "optional"
      }, {
        name: "User-Interface Prototype",
        validity: "optional"
      }, {
        name: "Workload Analysis Model",
        validity: "optional"
      }, {
        name: "Test Environment Configuration",
        validity: "optional"
      }, {
        name: "Test Evaluation Summary",
        validity: "optional"
      }, {
        name: "Test-Ideas List",
        validity: "optional"
      }, {
        name: "Test Suite",
        validity: "optional"
      }, {
        name: "Bill of Materials",
        validity: "optional"
      }, {
        name: "Deployment Plan",
        validity: "optional"
      }, {
        name: "Installation Artifacts",
        validity: "optional"
      }, {
        name: "Product Artwork",
        validity: "optional"
      }, {
        name: "User Support Material",
        validity: "optional"
      }];

    this.projectStorage.saveConstants({roles: this.roles, tasks: this.tasks, products: this.products});
  }

  displayedColumns = ['name'];
  dataSource = ELEMENT_DATA;
}

export interface Element {
  name: string;
  description: string;
  tasks: Array<any>;
  roles: Array<any>;
  products: Array<any>;
}

const ELEMENT_DATA: Element[] = [
  {
    name: 'Prosty manager czasu pracy',
    description: 'Prosta aplikacja webowa pozwalająca na śledzenie i zarządzanie czasem pracy, projekt tworzony przez jedną osobę',
    roles: [
      {id: 18, validity: 2},
      {id: 19, validity: 3},
      {id: 20, validity: 3},
      {id: 26, validity: 3},
    ],
    tasks: [
      {id: 46, validity: 2},
      {id: 50, validity: 3},
      {id: 67, validity: 3},
      {id: 78, validity: 2},
      {id: 68, validity: 1},
      {id: 66, validity: 2},
    ],
    products: [
      {id: 51, validity: 2},
      {id: 7, validity: 3},
      {id: 56, validity: 3},
      {id: 60, validity: 1},
      {id: 54, validity: 1},
      {id: 71, validity: 2},
    ],
  },
  {
    name: 'Prosty manager czasu pracy 2',
    description: 'Prosta aplikacja webowa pozwalająca na śledzenie i zarządzanie czasem pracy, projekt tworzony przez jedną osobę',
    roles: [
      {id: 18, validity: 2},
      {id: 19, validity: 3},
      {id: 20, validity: 3},
      {id: 26, validity: 3},
    ],
    tasks: [
      {id: 46, validity: 2},
      {id: 50, validity: 3},
      {id: 67, validity: 3},
      {id: 78, validity: 2},
      {id: 68, validity: 1},
      {id: 66, validity: 2},
    ],
    products: [
      {id: 51, validity: 2},
      {id: 7, validity: 3},
      {id: 56, validity: 3},
      {id: 60, validity: 1},
      {id: 54, validity: 1},
      {id: 71, validity: 2},
    ],
  },
  {
    name: 'Prosty manager czasu pracy 3',
    description: 'Prosta aplikacja webowa pozwalająca na śledzenie i zarządzanie czasem pracy, projekt tworzony przez jedną osobę',
    roles: [
      {id: 18, validity: 2},
      {id: 19, validity: 3},
      {id: 20, validity: 3},
      {id: 26, validity: 3},
    ],
    tasks: [
      {id: 46, validity: 2},
      {id: 50, validity: 3},
      {id: 67, validity: 3},
      {id: 78, validity: 2},
      {id: 68, validity: 1},
      {id: 66, validity: 2},
    ],
    products: [
      {id: 51, validity: 2},
      {id: 7, validity: 3},
      {id: 56, validity: 3},
      {id: 60, validity: 1},
      {id: 54, validity: 1},
      {id: 71, validity: 2},
    ],
  },
  {
    name: 'Prosty manager czasu pracy 4',
    description: 'Prosta aplikacja webowa pozwalająca na śledzenie i zarządzanie czasem pracy, projekt tworzony przez jedną osobę',
    roles: [
      {id: 18, validity: 2},
      {id: 19, validity: 3},
      {id: 20, validity: 3},
      {id: 26, validity: 3},
    ],
    tasks: [
      {id: 46, validity: 2},
      {id: 50, validity: 3},
      {id: 67, validity: 3},
      {id: 78, validity: 2},
      {id: 68, validity: 1},
      {id: 66, validity: 2},
    ],
    products: [
      {id: 51, validity: 2},
      {id: 7, validity: 3},
      {id: 56, validity: 3},
      {id: 60, validity: 1},
      {id: 54, validity: 1},
      {id: 71, validity: 2},
    ],
  }, {
    name: 'Sklep internetowy',
    description: 'Strona internetowa sklepu, budowana w niewielkim zespole',
    roles: [
      {id: 18, validity: 2},
      {id: 19, validity: 3},
      {id: 20, validity: 3},
      {id: 26, validity: 2},
      {id: 7, validity: 3},
      {id: 23, validity: 2},
      {id: 28, validity: 3},
      {id: 10, validity: 1},
    ],
    tasks: [
      {id: 46, validity: 3},
      {id: 50, validity: 3},
      {id: 67, validity: 3},
      {id: 78, validity: 2},
      {id: 68, validity: 2},
      {id: 66, validity: 3},
      {id: 5, validity: 1},
      {id: 81, validity: 2},
      {id: 30, validity: 2},
    ],
    products: [
      {id: 51, validity: 3},
      {id: 7, validity: 3},
      {id: 56, validity: 3},
      {id: 60, validity: 2},
      {id: 54, validity: 2},
      {id: 71, validity: 2},
      {id: 26, validity: 3},
      {id: 39, validity: 3},
      {id: 53, validity: 2},
      {id: 6, validity: 2},
      {id: 14, validity: 2},
    ],
  },
  // {name: 'Project 2'},
  // {name: 'Project 3'},
  // {name: 'Project 4'},
  // {name: 'Project 5'},
  // {name: 'Project 6'},
  // {name: 'Project 7'},
  // {name: 'Project 8'},
  // {name: 'Project 9'},
  // {name: 'Project 10'},
  // {name: 'Project 11'},
  // {name: 'Project 12'},
  // {name: 'Project 13'}
];
