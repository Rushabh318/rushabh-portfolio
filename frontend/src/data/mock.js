// Mock data for Rushabh Jain's Portfolio

export const personalInfo = {
  name: "Rushabh Jain",
  title: "Building Autonomous Systems",
  location: "Berlin, Germany",
  email: "jainrushabh65@gmail.com",
  phone: "+49 176 43478565",
  github: "https://github.com/Rushabh318",
  linkedin: "https://www.linkedin.com/in/rushabh-jain-950153102/",
  summary: "Robotics and Computer Vision Engineer with deep hands-on experience in autonomous systems, perception, and AI-driven robotics. Specialized in ROS2-based navigation, multi-sensor fusion, 2D/3D mapping, and applied deep learning for real-world deployment."
};

export const featuredProjects = [
  {
    id: 1,
    title: "Autonomous Mobile Robot for Indoor Surveying",
    company: "AICI GmbH",
    role: "Founding Robotics Engineer",
    duration: "Nov 2023 - Dec 2025",
    description: "Architected and built an autonomous mobile robot from TurtleBot3 to a near-production system for indoor surveying as the first technical hire.",
    impact: [
      "Evolved robot through multiple hardware iterations to near-production system",
      "2x inference speed improvement via ONNX/TensorRT optimization",
      "3cm localization accuracy using CV + LiDAR fusion",
      "Co-inventor on European patent for system-level integration"
    ],
    technologies: ["ROS2", "SLAM", "Nav2", "YOLOv8", "PyTorch", "C++", "PCL", "NVIDIA Jetson", "AWS"],
    keyAchievements: [
      "Real-time computer-vision + LiDAR fusion algorithm for structural feature extraction",
      "Transitioned from 2D to 3D perception with Livox LiDAR and RTAB-Map",
      "Developed autonomous exploration with custom explore-lite modifications",
      "Built high-performance robotics data pipelines using ROS2 Rosbags"
    ]
  },
  {
    id: 2,
    title: "Domain Adaptation using GANs for Object Detection",
    company: "RWTH Aachen University",
    role: "Master Thesis",
    duration: "Feb 2023 - Aug 2023",
    description: "Researched and implemented CycleGAN to bridge the 'reality gap' between synthetic and real-world industrial environments for assembly part detection.",
    impact: [
      "Grade: 1.0 (Highest Possible)",
      "110% relative improvement in cross-domain object detection",
      "0.49 mAP on real images vs 0.23 mAP from raw synthetic data",
      "Automated synthetic data generation pipeline in Blender"
    ],
    technologies: ["PyTorch", "CycleGAN", "Blender", "TensorFlow", "Computer Vision", "Deep Learning"],
    keyAchievements: [
      "Built automated data generation pipeline using CAD models in Blender",
      "Trained CycleGAN with ResNet generators and PatchGAN discriminators",
      "Evaluated using Fréchet Inception Distance (FID) and mAP metrics"
    ]
  },
  {
    id: 3,
    title: "Deep Learning Perception for Autonomous Driving",
    company: "ZF Friedrichshafen AG",
    role: "Deep Learning Intern",
    duration: "May 2022 - Nov 2022",
    description: "Developed camera perception algorithms for autonomous driving in a large-scale public-funded project, focusing on domain adaptation between simulated and real-world data.",
    impact: [
      "Implemented unsupervised domain adaptation using PyTorch",
      "Created synthetic data pipeline in CARLA simulator",
      "Deployed models on Kubernetes-based OpenShift cloud platform"
    ],
    technologies: ["PyTorch", "CARLA", "Docker", "Kubernetes", "OpenShift", "Computer Vision"],
    keyAchievements: [
      "Bridged gap between simulated and real-world driving data",
      "End-to-end pipeline from data generation to cloud deployment"
    ]
  },
  {
    id: 4,
    title: "Industry 4.0: Robotic Slag Removal Automation",
    company: "RWTH Aachen University",
    role: "Research Assistant",
    duration: "Dec 2021 - Sep 2023",
    description: "Developed computer vision algorithms for automating slag removal in iron processing using robotic manipulation.",
    impact: [
      "0.85 IoU with U-Net semantic segmentation",
      "20% performance improvement through hyperparameter tuning",
      "Integrated deep learning models into ROS-based system"
    ],
    technologies: ["TensorFlow", "U-Net", "ROS", "MoveIt", "C++", "PCL", "Computer Vision"],
    keyAchievements: [
      "Deployed semantic segmentation on industrial robotic arm",
      "Implemented motion planning algorithms for 3-DOF manipulation"
    ]
  }
];

export const allProjects = [
  {
    id: 5,
    title: "Embedded Measurement Device Prototypes",
    description: "Developed embedded C++ prototypes using ESP32/Arduino with IMU and laser sensors for orientation-aware measurement devices.",
    technologies: ["C++", "ESP32", "Arduino", "IMU Sensors"],
    category: "Embedded Systems"
  },
  {
    id: 6,
    title: "Hardware Prototyping with 3D Printing",
    description: "Rapid hardware prototyping using 3D printing, designing robot parts in Solidworks and Autodesk Fusion.",
    technologies: ["Solidworks", "Autodesk Fusion", "3D Printing"],
    category: "Mechanical Design"
  },
  {
    id: 7,
    title: "Multi-Modal Sensor Fusion Pipeline",
    description: "Integrated RGB, depth cameras, LiDAR, and IMUs for comprehensive robot perception from simulation to real-world deployment.",
    technologies: ["ROS2", "Sensor Fusion", "LiDAR", "Depth Cameras"],
    category: "Robotics"
  },
  {
    id: 8,
    title: "SONATA Vision Models on AWS",
    description: "Fine-tuned SONATA vision models on AWS (EC2, S3) as a YOLOv8 replacement, managing the full pipeline from dataset preparation to cloud training.",
    technologies: ["AWS", "EC2", "S3", "Computer Vision"],
    category: "Deep Learning"
  }
];

export const experience = [
  {
    id: 1,
    company: "AICI GmbH",
    location: "Munich, Germany",
    role: "Founding Robotics Engineer",
    duration: "Nov 2023 - Dec 2025",
    type: "Full-time",
    image: "https://customer-assets.emergentagent.com/job_dev-portfolio-1145/artifacts/xqnog7jm_image.png",
    imageAlt: "Autonomous mobile robot built at AICI",
    technologies: ["ROS2", "SLAM", "Nav2", "YOLOv8", "PyTorch", "C++", "PCL", "NVIDIA Jetson", "AWS", "RTAB-Map"],
    highlights: [
      "Architected and built autonomous mobile robot from TurtleBot3 to near-production system as first technical hire",
      "Developed real-time computer-vision + LiDAR fusion algorithm for structural feature extraction and optimal measurement location determination",
      "Achieved 2x inference speed improvement by migrating YOLOv8 models to ONNX/TensorRT pipelines",
      "Achieved 3cm localization accuracy using YOLO detections fused with depth camera and LiDAR data",
      "Led transition from 2D to 3D perception with Livox LiDAR integration and SLAM migration to RTAB-Map",
      "Implemented autonomous exploration and mapping using ROS2, SLAM Toolbox, and Nav2 with custom modifications",
      "Built high-performance robotics data pipelines using ROS2 logging (Rosbags) for multi-modal sensor data",
      "Fine-tuned SONATA vision models on AWS (EC2, S3) as YOLOv8 replacement",
      "Co-inventor on European patent for system-level integration of robots, drones, perception, and communication",
      "Hired and mentored 10 engineers across AI, perception, embedded, and mechatronics teams",
      "Established engineering infrastructure (GitLab workflows, Jira, Confluence)",
      "Managed EU compliance with certification bodies (TÜV, DEKRA, Elements)"
    ]
  },
  {
    id: 2,
    company: "RWTH Aachen University",
    location: "Aachen, Germany",
    role: "Research Assistant - Computer Vision & Autonomous Systems",
    duration: "Dec 2021 - Sep 2023",
    type: "Part-time",
    image: "https://customer-assets.emergentagent.com/job_dev-portfolio-1145/artifacts/hfkcquu9_image.png",
    imageAlt: "RViz visualization showing SLAM and motion planning at RWTH",
    technologies: ["TensorFlow", "U-Net", "ROS", "MoveIt", "C++", "PCL"],
    highlights: [
      "Developed computer vision algorithms for Industry 4.0 project automating slag removal in iron processing",
      "Deployed semantic segmentation models (U-Net) on industrial robotic arm, achieving 0.85 IoU",
      "Optimized models through hyperparameter tuning for up to 20% performance improvement",
      "Integrated deep learning models into ROS-based data processing and implemented motion planning with MoveIt",
      "Collected training data in rosbags during field visits to iron processing facilities"
    ]
  },
  {
    id: 3,
    company: "RWTH Aachen University",
    location: "Aachen, Germany",
    role: "Master Thesis",
    duration: "Feb 2023 - Aug 2023",
    type: "Research",
    image: "https://customer-assets.emergentagent.com/job_dev-portfolio-1145/artifacts/q1hzusip_image.png",
    imageAlt: "CycleGAN domain adaptation - synthetic to real images for Master Thesis",
    technologies: ["PyTorch", "CycleGAN", "Blender", "GANs", "Computer Vision"],
    highlights: [
      "Domain Adaptation of Synthetic Images using GANs for Object Detection of Assembly Parts (Grade: 1.0 - Highest Possible)",
      "Researched and implemented CycleGAN to bridge 'reality gap' between synthetic and real-world industrial environments",
      "Built automated data generation pipeline in Blender using CAD models to create diverse synthetic datasets",
      "Achieved 110% relative improvement in cross-domain object detection (0.49 mAP on real vs 0.23 mAP from synthetic)",
      "Trained CycleGAN with ResNet-based generators and PatchGAN discriminators for unpaired image-to-image translation",
      "Evaluated results using Fréchet Inception Distance (FID) and mean Average Precision (mAP) metrics"
    ]
  },
  {
    id: 4,
    company: "ZF Friedrichshafen AG",
    location: "Friedrichshafen, Germany",
    role: "Deep Learning Intern",
    duration: "May 2022 - Oct 2022",
    type: "Internship",
    image: "https://customer-assets.emergentagent.com/job_dev-portfolio-1145/artifacts/9xilty50_image.png",
    imageAlt: "Synthetic autonomous driving data generated using CARLA simulator",
    technologies: ["PyTorch", "CARLA", "Docker", "Kubernetes", "OpenShift", "EfficientDet"],
    highlights: [
      "Worked on deep learning-based camera perception algorithms for autonomous driving in large-scale public-funded project",
      "Implemented unsupervised domain adaptation approach using PyTorch to bridge gap between simulated and real-world driving data",
      "Created synthetic data generation pipeline using CARLA simulator from scratch for object detection and depth estimation",
      "Trained and deployed models using Docker on Kubernetes-based OpenShift cloud platform",
      "Developed end-to-end pipeline from data generation to cloud deployment for autonomous vehicle perception"
    ]
  },
  {
    id: 5,
    company: "ZF India Pvt. Ltd.",
    location: "Pune, India",
    role: "Technical Sales and Application Engineer",
    duration: "Jul 2018 - Sep 2020",
    type: "Full-time",
    highlights: [
      "Acted as primary technical interface between commercial vehicle OEMs and ZF's internal teams",
      "Translated customer requirements into technical solutions and commercial proposals",
      "Orchestrated full project lifecycle for suspension systems, from RFQs to business finalization",
      "Secured new project for bus platform valued at ₹10M per year",
      "Represented ZF at national auto expos and customer sites, demonstrating technical capabilities"
    ]
  }
];

export const education = [
  {
    id: 1,
    degree: "MSc. Robotics Systems Engineering",
    university: "RWTH Aachen University",
    location: "Aachen, Germany",
    duration: "Oct 2020 - Sep 2023",
    focus: "Computer Vision, Deep Learning, Autonomous Systems"
  },
  {
    id: 2,
    degree: "Bachelor of Engineering in Mechanical Engineering",
    university: "Savitribai Phule Pune University (SPPU)",
    location: "Pune, India",
    duration: "Jul 2014 - Jun 2018"
  }
];

export const skills = {
  "Programming Languages": ["Python", "C++", "MATLAB"],
  "Robotics & Autonomous Systems": ["ROS1/2", "Nav2", "SLAM", "RTAB-Map", "Gazebo", "NVIDIA Isaac Sim", "MoveIt"],
  "Computer Vision & Deep Learning": ["PyTorch", "TensorFlow", "OpenCV", "YOLOv8", "Semantic Segmentation", "Object Detection", "GANs"],
  "Data Processing": ["NumPy", "pandas", "PCL", "scikit-learn", "matplotlib", "Pillow"],
  "DevOps & Cloud": ["Docker", "Kubernetes", "AWS", "Git", "Linux"],
  "Hardware & Embedded": ["NVIDIA Jetson", "Raspberry Pi", "ESP32", "Arduino", "IMU Sensors"],
  "CAD & 3D Design": ["Solidworks", "Autodesk Fusion", "Blender", "3D Printing"],
  "Leadership & Collaboration": ["Team Building", "Technical Presentations", "Client Relations", "Cross-functional Collaboration", "Stakeholder Communication"]
};

export const achievements = [
  "Co-inventor on European patent for robotics system integration",
  "Master Thesis Grade: 1.0 (Highest Possible)",
  "110% improvement in cross-domain object detection accuracy",
  "2x inference speed improvement with ONNX/TensorRT optimization",
  "Founded and scaled engineering team from 1 to 10+ engineers",
  "Secured ₹10M annual project at ZF India"
];