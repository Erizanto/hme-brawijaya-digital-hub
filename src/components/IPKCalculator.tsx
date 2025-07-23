import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calculator, Plus, Trash2, BookOpen } from 'lucide-react';

interface Course {
  id: string;
  name: string;
  credits: number;
  grade: string;
}

interface Semester {
  id: string;
  name: string;
  courses: Course[];
}

const IPKCalculator = () => {
  const [semesters, setSemesters] = useState<Semester[]>([
    { id: '1', name: 'Semester 1', courses: [] }
  ]);

  const gradePoints: { [key: string]: number } = {
    'A': 4.0,
    'B+': 3.5,
    'B': 3.0,
    'C+': 2.5,
    'C': 2.0,
    'D+': 1.5,
    'D': 1.0,
    'E': 0.0,
  };

  const addSemester = () => {
    const newSemester: Semester = {
      id: Date.now().toString(),
      name: `Semester ${semesters.length + 1}`,
      courses: []
    };
    setSemesters([...semesters, newSemester]);
  };

  const addCourse = (semesterId: string) => {
    const newCourse: Course = {
      id: Date.now().toString(),
      name: '',
      credits: 3,
      grade: 'A'
    };
    setSemesters(semesters.map(sem => 
      sem.id === semesterId 
        ? { ...sem, courses: [...sem.courses, newCourse] }
        : sem
    ));
  };

  const updateCourse = (semesterId: string, courseId: string, field: keyof Course, value: any) => {
    setSemesters(semesters.map(sem => 
      sem.id === semesterId 
        ? {
            ...sem, 
            courses: sem.courses.map(course => 
              course.id === courseId 
                ? { ...course, [field]: value }
                : course
            )
          }
        : sem
    ));
  };

  const removeCourse = (semesterId: string, courseId: string) => {
    setSemesters(semesters.map(sem => 
      sem.id === semesterId 
        ? { ...sem, courses: sem.courses.filter(course => course.id !== courseId) }
        : sem
    ));
  };

  const removeSemester = (semesterId: string) => {
    if (semesters.length > 1) {
      setSemesters(semesters.filter(sem => sem.id !== semesterId));
    }
  };

  const calculateIPS = (courses: Course[]) => {
    if (courses.length === 0) return 0;
    const totalPoints = courses.reduce((sum, course) => 
      sum + (gradePoints[course.grade] * course.credits), 0);
    const totalCredits = courses.reduce((sum, course) => sum + course.credits, 0);
    return totalCredits > 0 ? totalPoints / totalCredits : 0;
  };

  const calculateIPK = () => {
    const allCourses = semesters.flatMap(sem => sem.courses);
    return calculateIPS(allCourses);
  };

  return (
    <Card className="w-full max-w-4xl mx-auto hover:shadow-elegant transition-all duration-500 border-0 shadow-card">
      <CardHeader className="text-center bg-gradient-primary text-primary-foreground rounded-t-lg">
        <div className="flex items-center justify-center mb-4">
          <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center animate-pulse">
            <Calculator className="w-8 h-8 text-accent-foreground" />
          </div>
        </div>
        <CardTitle className="text-2xl font-bold">Kalkulator IPK & IPS</CardTitle>
        <p className="opacity-90">Hitung Indeks Prestasi Semester dan Kumulatif dengan mudah</p>
      </CardHeader>
      
      <CardContent className="p-6 space-y-6">
        {/* Summary */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-gradient-to-r from-blue-500/10 to-blue-600/10 p-4 rounded-lg border border-blue-200 hover:scale-105 transition-transform duration-300">
            <div className="flex items-center mb-2">
              <BookOpen className="w-5 h-5 text-blue-600 mr-2" />
              <h3 className="font-semibold text-blue-800">IPK Keseluruhan</h3>
            </div>
            <p className="text-3xl font-bold text-blue-600">{calculateIPK().toFixed(2)}</p>
          </div>
          <div className="bg-gradient-to-r from-green-500/10 to-green-600/10 p-4 rounded-lg border border-green-200 hover:scale-105 transition-transform duration-300">
            <div className="flex items-center mb-2">
              <Calculator className="w-5 h-5 text-green-600 mr-2" />
              <h3 className="font-semibold text-green-800">Total SKS</h3>
            </div>
            <p className="text-3xl font-bold text-green-600">
              {semesters.flatMap(sem => sem.courses).reduce((sum, course) => sum + course.credits, 0)}
            </p>
          </div>
        </div>

        {/* Semesters */}
        <div className="space-y-6">
          {semesters.map((semester) => (
            <div key={semester.id} className="border rounded-lg p-4 hover:shadow-card transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-primary flex items-center">
                  <BookOpen className="w-5 h-5 mr-2" />
                  {semester.name}
                  <span className="ml-4 text-sm font-normal text-muted-foreground">
                    IPS: {calculateIPS(semester.courses).toFixed(2)}
                  </span>
                </h3>
                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => addCourse(semester.id)}
                    className="hover:scale-110 transition-all duration-300"
                  >
                    <Plus className="w-4 h-4 mr-1" />
                    Tambah Matkul
                  </Button>
                  {semesters.length > 1 && (
                    <Button 
                      variant="destructive" 
                      size="sm" 
                      onClick={() => removeSemester(semester.id)}
                      className="hover:scale-110 transition-all duration-300"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  )}
                </div>
              </div>

              <div className="space-y-3">
                {semester.courses.map((course) => (
                  <div key={course.id} className="grid grid-cols-1 md:grid-cols-12 gap-3 items-end bg-muted/30 p-3 rounded-lg hover:bg-muted/50 transition-all duration-300">
                    <div className="md:col-span-5">
                      <Label htmlFor={`course-name-${course.id}`}>Nama Mata Kuliah</Label>
                      <Input
                        id={`course-name-${course.id}`}
                        value={course.name}
                        onChange={(e) => updateCourse(semester.id, course.id, 'name', e.target.value)}
                        placeholder="Masukkan nama mata kuliah"
                        className="hover:scale-105 transition-transform duration-200"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <Label htmlFor={`course-credits-${course.id}`}>SKS</Label>
                      <Input
                        id={`course-credits-${course.id}`}
                        type="number"
                        min="1"
                        max="6"
                        value={course.credits}
                        onChange={(e) => updateCourse(semester.id, course.id, 'credits', parseInt(e.target.value) || 1)}
                        className="hover:scale-105 transition-transform duration-200"
                      />
                    </div>
                    <div className="md:col-span-3">
                      <Label htmlFor={`course-grade-${course.id}`}>Nilai</Label>
                      <Select 
                        value={course.grade} 
                        onValueChange={(value) => updateCourse(semester.id, course.id, 'grade', value)}
                      >
                        <SelectTrigger className="hover:scale-105 transition-transform duration-200">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {Object.entries(gradePoints).map(([grade, point]) => (
                            <SelectItem key={grade} value={grade}>
                              {grade} ({point})
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="md:col-span-2">
                      <Button 
                        variant="destructive" 
                        size="sm" 
                        onClick={() => removeCourse(semester.id, course.id)}
                        className="w-full hover:scale-110 transition-all duration-300"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Add Semester Button */}
        <div className="text-center">
          <Button 
            onClick={addSemester} 
            variant="outline" 
            size="lg"
            className="hover:scale-110 transition-all duration-300 hover:shadow-glow"
          >
            <Plus className="w-5 h-5 mr-2" />
            Tambah Semester
          </Button>
        </div>

        {/* Grade Scale Reference */}
        <div className="bg-muted/30 p-4 rounded-lg">
          <h4 className="font-semibold mb-3 text-primary">Skala Penilaian:</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
            {Object.entries(gradePoints).map(([grade, point]) => (
              <div key={grade} className="flex justify-between bg-background p-2 rounded hover:bg-primary/5 transition-colors duration-200">
                <span className="font-medium">{grade}:</span>
                <span className="text-muted-foreground">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default IPKCalculator;