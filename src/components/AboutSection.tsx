import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, MapPin, GraduationCap, Briefcase, Code, Users, TrendingUp } from "lucide-react";

const AboutSection = () => {
  const experiences = [
    {
      company: "Physics Wallah",
      role: "Business Analyst, Drip Marketing Team",
      period: "Aug 2024 – Present",
      location: "Remote",
      achievements: [
        "Tracked key performance metrics (CPT, CTR, Conversion Rate) to optimize campaign effectiveness",
        "Designed automated lifecycle journeys using behavioral segmentation, improving retention and engagement",
        "Launched cross-sell campaigns based on transactional data, leading to a 15–20% increase in product adoption",
        "Audited and reconciled monthly communication tool invoices (SMS, WhatsApp, email), ensuring 100% billing accuracy",
        "Collaborated with product and data teams to identify customer touchpoints and streamline campaign strategies"
      ]
    },
    {
      company: "Kota Vidyapeeth",
      role: "Class Operations Team Lead",
      period: "Apr 2022 – Aug 2024",
      location: "Kota, Rajasthan",
      achievements: [
        "Managed a team of 210+ staff across 4 buildings to ensure smooth classroom operations",
        "Achieved 99% content upload efficiency through process automation and dashboard monitoring",
        "Improved workflow completion rate to over 90% by standardizing digital content management processes",
        "Trained staff on tools like OBS Studio, Adobe Premiere Pro, and HandBrake to improve content delivery quality",
        "Coordinated with tech and academic teams to resolve class delivery and content issues proactively"
      ]
    },
    {
      company: "Physics Wallah",
      role: "Studio Operations Associate",
      period: "Sep 2021 – Mar 2022",
      location: "Remote",
      achievements: [
        "Managed YouTube live sessions and internal studio recordings with zero major downtimes",
        "Handled technical setups, troubleshoot issues in real time to ensure smooth content broadcasting"
      ]
    }
  ];

  const skills = {
    "Business & Analytics": [
      "Business Development", "Lifecycle Campaigns", "Data Analysis", "Project Management", "Marketing Automation"
    ],
    "Tools & Technologies": [
      "SQL", "Power BI", "Looker Studio", "Microsoft Excel", "MoEngage", "Adobe Premiere Pro", "OBS Studio"
    ],
    "Soft Skills": [
      "Communication", "Problem Solving", "Leadership", "Stakeholder Management"
    ]
  };

  const projects = [
    {
      title: "User Segmentation & Campaign ROI Dashboard",
      description: "Created a Power BI dashboard to monitor campaign performance across segments (CTR, conversion rate). Improved reporting speed by 30% and supported real-time decision-making for drip campaigns."
    },
    {
      title: "SQL-Based Retention Analysis",
      description: "Wrote SQL queries to extract and analyze repeat user behavior from MoEngage logs. Identified churn patterns and recommended 3 lifecycle stages for re-engagement."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Professional Journey
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Results-oriented Marketing Analyst with over 3 years of experience in marketing automation, 
            campaign analytics, and cross-functional team operations. Skilled in optimizing lifecycle journeys, 
            analyzing user behavior, and improving customer engagement.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6 animate-fade-in">
            <Card className="bg-gradient-card border-primary/20 shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-foreground">
                  <Users className="w-5 h-5 text-primary" />
                  Contact Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span className="text-sm text-muted-foreground">Kota, Rajasthan</span>
                </div>
                <div className="flex items-center gap-3">
                  <CalendarDays className="w-4 h-4 text-primary" />
                  <span className="text-sm text-muted-foreground">+91-9079746657</span>
                </div>
                <div className="text-sm text-muted-foreground">
                  bsp01062000@gmail.com
                </div>
                <div className="text-sm text-primary">
                  LinkedIn: bhola-shankar-sharma-655827220
                </div>
              </CardContent>
            </Card>

            {/* Education */}
            <Card className="bg-gradient-card border-primary/20 shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-foreground">
                  <GraduationCap className="w-5 h-5 text-primary" />
                  Education
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground">Master of Commerce</h4>
                  <p className="text-sm text-muted-foreground">University of Kota, Kota</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Bachelor of Commerce</h4>
                  <p className="text-sm text-muted-foreground">University of Kota, Kota</p>
                </div>
              </CardContent>
            </Card>

            {/* Languages & Interests */}
            <Card className="bg-gradient-card border-primary/20 shadow-card">
              <CardHeader>
                <CardTitle className="text-foreground">Languages & Interests</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Languages</h4>
                    <p className="text-sm text-muted-foreground">Hindi (Native), English (Professional Proficiency)</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Interests</h4>
                    <p className="text-sm text-muted-foreground">Travel, Music, Team Leadership</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Experience */}
            <div className="animate-fade-in">
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                <Briefcase className="w-6 h-6 text-primary" />
                Professional Experience
              </h3>
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <Card key={index} className="bg-gradient-card border-primary/20 shadow-card">
                    <CardHeader>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                        <div>
                          <h4 className="text-lg font-semibold text-foreground">{exp.role}</h4>
                          <p className="text-primary font-medium">{exp.company}</p>
                        </div>
                        <div className="text-sm text-muted-foreground">
                          <div>{exp.period}</div>
                          <div>{exp.location}</div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Skills */}
            <div className="animate-fade-in">
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                <Code className="w-6 h-6 text-primary" />
                Key Skills
              </h3>
              <div className="space-y-6">
                {Object.entries(skills).map(([category, skillList]) => (
                  <Card key={category} className="bg-gradient-card border-primary/20 shadow-card">
                    <CardHeader>
                      <CardTitle className="text-lg text-foreground">{category}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {skillList.map((skill, index) => (
                          <Badge key={index} variant="secondary" className="text-sm">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Projects */}
            <div className="animate-fade-in">
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                <TrendingUp className="w-6 h-6 text-primary" />
                Key Projects
              </h3>
              <div className="space-y-4">
                {projects.map((project, index) => (
                  <Card key={index} className="bg-gradient-card border-primary/20 shadow-card">
                    <CardHeader>
                      <CardTitle className="text-lg text-foreground">{project.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{project.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;