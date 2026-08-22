// ---------- Data ----------
const skills = [
  { title: "Cloud Platforms", items: ["Microsoft Azure", "AWS EC2", "S3", "VPC", "IAM", "RDS", "EKS", "ELB", "App Service", "Azure Functions"] },
  { title: "DevOps & CI/CD", items: ["Azure DevOps", "AWS CodePipeline", "CodeBuild", "Jenkins", "GitHub Actions", "Git"] },
  { title: "Infrastructure as Code", items: ["Terraform", "AWS CloudFormation", "ARM Templates"] },
  { title: "Automation & Scripting", items: ["PowerShell", "Bash", "Ansible"] },
  { title: "Containers & Orchestration", items: ["Docker", "Kubernetes", "AKS", "Amazon EKS"] },
  { title: "Cloud Security", items: ["Azure RBAC", "AWS IAM", "Key Vault", "Secrets Manager", "Defender for Cloud"] },
  { title: "Monitoring & Logging", items: ["Azure Monitor", "Log Analytics", "CloudWatch", "CloudTrail", "Prometheus", "Grafana"] },
  { title: "Networking", items: ["Azure VNet", "AWS VPC", "Load Balancers", "Application Gateway", "Traffic Manager", "Route Tables"] },
  { title: "Storage & Backup", items: ["Azure Storage", "AWS S3", "EBS", "Azure Backup", "AWS Backup", "SAN", "NAS", "VERITAS NetBackup"] },
  { title: "OS & Virtualization", items: ["RHEL", "Ubuntu", "Windows Server", "VMware", "Hyper-V"] },
];

const experience = [
  {
    role: "Cloud Engineer",
    company: "Tata Consultancy Services · Kolkata, India",
    date: "Apr 2021 – Present",
    points: [
      "<strong>Multi-Cloud Architecture:</strong> Designed and managed scalable infrastructure across Azure and AWS using Azure VMs, EC2, S3, and VPC for production workloads.",
      "<strong>DevOps & CI/CD:</strong> Built pipelines with Azure DevOps, Jenkins, GitHub Actions, and AWS CodePipeline, integrating Terraform-based provisioning to improve release efficiency.",
      "<strong>Infrastructure as Code:</strong> Developed reusable Terraform modules and CloudFormation templates for consistent deployments across dev, staging, and production.",
      "<strong>Containerization & Kubernetes:</strong> Deployed containerized workloads on Docker, AKS, and Amazon EKS with autoscaling, ingress controllers, and network policies.",
      "<strong>High Availability:</strong> Implemented Azure Load Balancer, Application Gateway, Traffic Manager, and AWS ELB for fault tolerance and traffic distribution.",
      "<strong>Monitoring & DR:</strong> Set up Azure Monitor, Log Analytics, and CloudWatch/CloudTrail; designed backup and disaster recovery with Recovery Services Vault and AWS Backup.",
      "<strong>Governance & Innovation:</strong> Enabled hybrid governance with Azure Arc & Policy, deployed Azure AI/OpenAI workloads, and optimized cloud spend via FinOps practices.",
    ],
  },
  {
    role: "System Administrator",
    company: "Tata Consultancy Services · Chennai, India",
    date: "Nov 2017 – Mar 2021",
    points: [
      "<strong>Storage Management:</strong> Managed multi-vendor SAN, NAS, and VERITAS NetBackup environments ensuring high data availability and recovery.",
      "<strong>Virtualization:</strong> Deployed and maintained VMs on VMware and Hyper-V for flexible, scalable server infrastructure.",
      "<strong>Data Protection:</strong> Implemented and tested backup/recovery methodologies with NetBackup and Data Domain solutions.",
      "<strong>Performance:</strong> Monitored systems to identify bottlenecks and optimize resource utilization and efficiency.",
      "<strong>Storage Virtualization:</strong> Performed LUN migrations using storage virtualization to enhance capacity and streamline data management.",
    ],
  },
];

const certs = [
  { name: "Azure Administrator Associate", code: "AZ-104", badge: "AZ" },
  { name: "Designing Azure Infrastructure Solutions", code: "AZ-305", badge: "AZ" },
  { name: "Implementing Microsoft DevOps Solutions", code: "AZ-400", badge: "AZ" },
  { name: "Azure Network Engineer Associate", code: "AZ-700", badge: "AZ" },
  { name: "Certified Kubernetes Administrator", code: "CKA", badge: "K8" },
  { name: "Red Hat Certified System Administrator", code: "EX200", badge: "RH" },
  { name: "Red Hat Certified Engineer", code: "EX294", badge: "RH" },
  { name: "Red Hat Certified System Administrator in OpenShift", code: "EX280", badge: "RH" },
];

const education = [
  { degree: "B.Tech, Electrical Engineering", inst: "Maulana Abul Kalam Azad University of Technology", score: "9.18 CGPA" },
  { degree: "Diploma in Electrical Engineering", inst: "Ramakrishna Mission Shilpamandira", score: "81.8%" },
  { degree: "Higher Secondary", inst: "Sheakhala Benimadhab High School", score: "65.6%" },
  { degree: "Secondary", inst: "Sheakhala Benimadhab High School", score: "71%" },
];

// ---------- Render ----------
document.getElementById("skillsGrid").innerHTML = skills.map(s => `
  <div class="skill-card reveal">
    <h3>${s.title}</h3>
    <div class="tags">${s.items.map(i => `<span class="tag">${i}</span>`).join("")}</div>
  </div>`).join("");

document.getElementById("timeline").innerHTML = experience.map(e => `
  <div class="tl-item reveal">
    <div class="tl-head">
      <span class="tl-role">${e.role}</span>
      <span class="tl-date">${e.date}</span>
    </div>
    <div class="tl-company">${e.company}</div>
    <ul class="tl-points">${e.points.map(p => `<li>${p}</li>`).join("")}</ul>
  </div>`).join("");

document.getElementById("certsGrid").innerHTML = certs.map(c => `
  <div class="cert-card reveal">
    <span class="badge">${c.badge}</span>
    <div>
      <div class="cert-name">${c.name}</div>
      <div class="cert-code">${c.code}</div>
    </div>
  </div>`).join("");

document.getElementById("eduGrid").innerHTML = education.map(e => `
  <div class="edu-card reveal">
    <h3>${e.degree}</h3>
    <div class="edu-inst">${e.inst}</div>
    <div class="edu-score">${e.score}</div>
  </div>`).join("");

document.getElementById("year").textContent = new Date().getFullYear();

// ---------- Interactions ----------
const nav = document.getElementById("nav");
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

window.addEventListener("scroll", () => {
  nav.classList.toggle("scrolled", window.scrollY > 20);
});

navToggle.addEventListener("click", () => navLinks.classList.toggle("open"));
navLinks.querySelectorAll("a").forEach(a =>
  a.addEventListener("click", () => navLinks.classList.remove("open"))
);

// Scroll reveal
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
