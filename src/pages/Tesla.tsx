import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { 
  BookOpen, 
  Download, 
  Eye, 
  Calendar,
  Users,
  Award,
  Upload,
  Search,
  Filter,
  ExternalLink,
  Target
} from 'lucide-react';
import labScene from '@/assets/lab-scene.jpg';

const Tesla = () => {
  const [activeTab, setActiveTab] = useState('about');

  const journalInfo = {
    title: "TESLA",
    fullTitle: "Teknik Elektro Scientific, Literature & Analysis",
    issn: "2580-0531",
    frequency: "Bi-annual (June & December)",
    scope: "Electrical Engineering, Electronics, Telecommunications, Control Systems, Power Systems"
  };

  const volumes = [
    {
      volume: "Vol. 15 No. 2",
      year: "2024",
      published: "December 2024",
      articles: 12,
      status: "Latest",
      topics: ["IoT Systems", "Renewable Energy", "Signal Processing", "AI in Engineering"]
    },
    {
      volume: "Vol. 15 No. 1", 
      year: "2024",
      published: "June 2024",
      articles: 10,
      status: "Available",
      topics: ["Power Electronics", "Machine Learning", "Wireless Communication"]
    },
    {
      volume: "Vol. 14 No. 2",
      year: "2023", 
      published: "December 2023",
      articles: 11,
      status: "Available",
      topics: ["Smart Grid", "Computer Vision", "Embedded Systems"]
    },
    {
      volume: "Vol. 14 No. 1",
      year: "2023",
      published: "June 2023", 
      articles: 9,
      status: "Available",
      topics: ["Robotics", "Digital Signal Processing", "Power Systems"]
    }
  ];

  const editorialBoard = [
    { 
      role: "Editor-in-Chief", 
      name: "Prof. Dr. Ir. Ahmad Syafii, M.T.", 
      affiliation: "Teknik Elektro FT-UB",
      expertise: "Power Systems & Smart Grid"
    },
    { 
      role: "Managing Editor", 
      name: "Dr. Ir. Siti Sendari, S.T., M.T.", 
      affiliation: "Teknik Elektro FT-UB",
      expertise: "Digital Signal Processing"
    },
    { 
      role: "Associate Editor", 
      name: "Dr. Eng. Unggul Wibawa, S.T., M.Sc.", 
      affiliation: "Teknik Elektro FT-UB",
      expertise: "Telecommunications & IoT"
    },
    { 
      role: "Associate Editor", 
      name: "Dr. Ir. Hadi Suyono, S.T., M.T.", 
      affiliation: "Teknik Elektro FT-UB",
      expertise: "Control Systems & Automation"
    }
  ];

  const submissionGuidelines = [
    {
      title: "Article Types",
      description: "Original research articles, review articles, technical notes, and case studies"
    },
    {
      title: "Length Requirement", 
      description: "6-15 pages including figures, tables, and references"
    },
    {
      title: "Format",
      description: "IEEE format with double-column layout, 10pt Times New Roman font"
    },
    {
      title: "Language",
      description: "English or Bahasa Indonesia with English abstract"
    },
    {
      title: "Peer Review",
      description: "Double-blind peer review process with minimum 2 reviewers"
    },
    {
      title: "Publication Fee",
      description: "Free of charge for authors (Open Access Journal)"
    }
  ];

  const upcomingDeadlines = [
    {
      issue: "Vol. 16 No. 1 (June 2025)",
      submission: "March 15, 2025",
      review: "April 30, 2025", 
      publication: "June 15, 2025"
    },
    {
      issue: "Vol. 16 No. 2 (December 2025)",
      submission: "September 15, 2025",
      review: "October 30, 2025",
      publication: "December 15, 2025"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-primary text-primary-foreground overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
              <BookOpen className="w-10 h-10 text-accent-foreground" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-fade-in">
              TESLA Journal
            </h1>
            <h2 className="text-2xl md:text-3xl mb-6 opacity-90">
              Teknik Elektro Scientific, Literature & Analysis
            </h2>
            <p className="text-lg opacity-80 mb-8 max-w-2xl mx-auto">
              Jurnal ilmiah berkala yang menerbitkan penelitian terbaru di bidang teknik elektro, 
              elektronika, telekomunikasi, dan teknologi terkait
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button variant="accent" size="hero">
                Submit Paper
                <Upload className="w-5 h-5" />
              </Button>
              <Button variant="outline-accent" size="hero" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Browse Issues
                <Eye className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Journal Stats */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">15+</div>
              <div className="text-muted-foreground">Volumes Published</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">200+</div>
              <div className="text-muted-foreground">Articles Published</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Total Downloads</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">2x</div>
              <div className="text-muted-foreground">Per Year</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-5 mb-12 h-auto p-1">
              <TabsTrigger value="about" className="text-center py-3">About Journal</TabsTrigger>
              <TabsTrigger value="current" className="text-center py-3">Current Issue</TabsTrigger>
              <TabsTrigger value="archives" className="text-center py-3">Archives</TabsTrigger>
              <TabsTrigger value="submit" className="text-center py-3">Submit Paper</TabsTrigger>
              <TabsTrigger value="editorial" className="text-center py-3">Editorial Board</TabsTrigger>
            </TabsList>

            <TabsContent value="about" className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card className="border-0 shadow-card">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BookOpen className="w-6 h-6 text-primary" />
                      Journal Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <strong>Full Title:</strong>
                      <p className="text-muted-foreground">{journalInfo.fullTitle}</p>
                    </div>
                    <div>
                      <strong>ISSN:</strong>
                      <p className="text-muted-foreground">{journalInfo.issn}</p>
                    </div>
                    <div>
                      <strong>Publication Frequency:</strong>
                      <p className="text-muted-foreground">{journalInfo.frequency}</p>
                    </div>
                    <div>
                      <strong>Scope:</strong>
                      <p className="text-muted-foreground">{journalInfo.scope}</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-card">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Target className="w-6 h-6 text-primary" />
                      Focus Areas
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Power Systems", "Electronics", "Telecommunications", 
                        "Control Systems", "Signal Processing", "IoT", 
                        "Renewable Energy", "Machine Learning", "Robotics"
                      ].map((area) => (
                        <Badge key={area} variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                          {area}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="border-0 shadow-card">
                <CardHeader>
                  <CardTitle>About TESLA Journal</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-gray max-w-none">
                  <p>
                    TESLA (Teknik Elektro Scientific, Literature & Analysis) adalah jurnal ilmiah yang 
                    diterbitkan oleh Himpunan Mahasiswa Elektro Fakultas Teknik Universitas Brawijaya. 
                    Jurnal ini berfokus pada publikasi hasil penelitian berkualitas tinggi di bidang 
                    teknik elektro dan teknologi terkait.
                  </p>
                  <p>
                    Dengan komitmen terhadap open access, TESLA menyediakan platform untuk peneliti, 
                    akademisi, dan praktisi untuk berbagi pengetahuan dan inovasi terbaru dalam bidang 
                    teknik elektro. Setiap artikel yang dipublikasikan telah melalui proses peer review 
                    yang ketat untuk memastikan kualitas dan originalitas.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="current" className="space-y-8">
              <Card className="border-0 shadow-elegant">
                <CardHeader className="bg-gradient-primary text-primary-foreground rounded-t-lg">
                  <CardTitle className="flex items-center gap-2 text-2xl">
                    <Award className="w-8 h-8" />
                    Current Issue: {volumes[0].volume}
                  </CardTitle>
                  <CardDescription className="text-primary-foreground/80 text-lg">
                    Published: {volumes[0].published}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <img 
                        src={labScene} 
                        alt="Current Issue Cover" 
                        className="w-full h-64 object-cover rounded-lg shadow-card"
                      />
                    </div>
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-xl font-semibold mb-2">Issue Highlights</h3>
                        <div className="flex flex-wrap gap-2">
                          {volumes[0].topics.map((topic) => (
                            <Badge key={topic} className="bg-accent/10 text-accent border-accent/20">
                              {topic}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div>
                        <p className="text-muted-foreground mb-4">
                          This issue features {volumes[0].articles} high-quality research articles 
                          covering cutting-edge topics in electrical engineering and technology.
                        </p>
                      </div>
                      <div className="flex gap-4">
                        <Button variant="default" size="lg">
                          <Download className="w-5 h-5" />
                          Download Full Issue
                        </Button>
                        <Button variant="outline" size="lg">
                          <Eye className="w-5 h-5" />
                          View Articles
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="archives" className="space-y-8">
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
                    <input 
                      type="text" 
                      placeholder="Search articles, authors, keywords..."
                      className="w-full pl-10 pr-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </div>
                <Button variant="outline" size="icon">
                  <Filter className="w-5 h-5" />
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {volumes.map((volume, index) => (
                  <Card key={index} className="border-0 shadow-card hover:shadow-elegant transition-all duration-300">
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <CardTitle className="text-xl">{volume.volume}</CardTitle>
                        <Badge 
                          variant={volume.status === 'Latest' ? 'default' : 'secondary'}
                          className={volume.status === 'Latest' ? 'bg-accent text-accent-foreground' : ''}
                        >
                          {volume.status}
                        </Badge>
                      </div>
                      <CardDescription className="text-base">
                        Published: {volume.published}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Users className="w-4 h-4" />
                        {volume.articles} Articles
                      </div>
                      
                      <div>
                        <div className="text-sm font-medium mb-2">Featured Topics:</div>
                        <div className="flex flex-wrap gap-1">
                          {volume.topics.map((topic) => (
                            <Badge key={topic} variant="outline" className="text-xs">
                              {topic}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="flex gap-2 pt-4">
                        <Button variant="default" size="sm" className="flex-1">
                          <Eye className="w-4 h-4" />
                          View
                        </Button>
                        <Button variant="outline" size="sm" className="flex-1">
                          <Download className="w-4 h-4" />
                          Download
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="submit" className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <Card className="border-0 shadow-card">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Upload className="w-6 h-6 text-primary" />
                        Submission Guidelines
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {submissionGuidelines.map((guideline, index) => (
                        <div key={index} className="pb-4 border-b border-border last:border-b-0 last:pb-0">
                          <h4 className="font-semibold mb-2">{guideline.title}</h4>
                          <p className="text-muted-foreground text-sm">{guideline.description}</p>
                        </div>
                      ))}
                    </CardContent>
                  </Card>

                  <div className="text-center">
                    <Button variant="gradient" size="hero" className="w-full">
                      Submit Your Paper
                      <ExternalLink className="w-5 h-5" />
                    </Button>
                    <p className="text-sm text-muted-foreground mt-2">
                      Authors must create an account before submission
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <Card className="border-0 shadow-card">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Calendar className="w-6 h-6 text-primary" />
                        Publication Timeline
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {upcomingDeadlines.map((deadline, index) => (
                        <div key={index} className="pb-6 border-b border-border last:border-b-0 last:pb-0">
                          <h4 className="font-semibold text-primary mb-3">{deadline.issue}</h4>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">Submission Deadline:</span>
                              <span className="font-medium">{deadline.submission}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">Review Completion:</span>
                              <span className="font-medium">{deadline.review}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">Publication Date:</span>
                              <span className="font-medium text-accent">{deadline.publication}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-card bg-primary/5">
                    <CardHeader>
                      <CardTitle className="text-primary">Need Help?</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <p className="text-sm text-muted-foreground">
                        Contact our editorial team for submission assistance:
                      </p>
                      <div className="space-y-2 text-sm">
                        <div>
                          <strong>Email:</strong> tesla@ft.ub.ac.id
                        </div>
                        <div>
                          <strong>Phone:</strong> +62 341 587711 ext. 105
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="editorial" className="space-y-8">
              <Card className="border-0 shadow-card">
                <CardHeader>
                  <CardTitle className="text-2xl">Editorial Board</CardTitle>
                  <CardDescription>
                    Meet the experts who ensure the quality and integrity of TESLA Journal
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {editorialBoard.map((member, index) => (
                      <div key={index} className="p-6 bg-muted/30 rounded-lg">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                            <Users className="w-6 h-6 text-primary-foreground" />
                          </div>
                          <div>
                            <Badge variant="outline" className="mb-2">{member.role}</Badge>
                            <h4 className="font-semibold text-primary mb-2">{member.name}</h4>
                            <p className="text-sm text-muted-foreground mb-2">{member.affiliation}</p>
                            <p className="text-sm text-accent">{member.expertise}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Tesla;