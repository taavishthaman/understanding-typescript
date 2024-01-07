import { Component } from "./base-component";
import { Project } from "../models/project";
import { ProjectItem } from "./project-item";
import { autobind } from "../decorators/autobind";
import { projectState } from "../state/project-state";
import { ProjectStatus } from "../models/project";

export class ProjectList extends Component<HTMLDivElement, HTMLElement> {
  assignedProjects: Project[];
  relevantProjects: Project[];

  constructor(private type: "active" | "finished") {
    super("project-list", "app", false, `${type}-projects`);

    this.assignedProjects = [];
    this.relevantProjects = [];

    this.configure();
    this.renderContent();
  }

  private renderProjects() {
    const listEl = document.getElementById(
      `${this.type}-projects-list`
    )! as HTMLUListElement;
    listEl.innerHTML = "";
    for (const prjItem of this.assignedProjects) {
      new ProjectItem(this.element.querySelector("ul")!.id, prjItem);
    }
  }

  @autobind
  dragOverHandler(event: DragEvent) {
    if (event.dataTransfer && event.dataTransfer.types[0] === "text/plain") {
      event.preventDefault();
      const listEl = this.element.querySelector("ul");
      listEl?.classList.add("droppable");
    }
  }

  @autobind
  dropHandler(event: DragEvent) {
    const prjId = event.dataTransfer!.getData("text/plain");
    projectState.moveProject(
      prjId,
      this.type === "active" ? ProjectStatus.Active : ProjectStatus.Finished
    );
  }

  @autobind
  dragLeaveHandler(event: DragEvent) {
    const listEl = this.element.querySelector("ul");
    listEl?.classList.remove("droppable");
  }

  configure(): void {
    this.element.addEventListener("dragover", this.dragOverHandler);
    this.element.addEventListener("dragleave", this.dragLeaveHandler);
    this.element.addEventListener("drop", this.dropHandler);

    projectState.addListener((projects: Project[]) => {
      this.relevantProjects = projects.filter((prj) => {
        if (this.type === "active") return prj.status === ProjectStatus.Active;
        return prj.status === ProjectStatus.Finished;
      });
      this.assignedProjects = this.relevantProjects;
      this.renderProjects();
    });
  }

  renderContent() {
    const listId = `${this.type}-projects-list`;
    this.element.querySelector("ul")!.id = listId;
    this.element.querySelector("h2")!.textContent =
      this.type.toUpperCase() + " PROJECTS";
  }
}
