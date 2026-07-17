"use client";

import React, { useState } from "react";
import { 
  Button, 
  Input, 
  Select, 
  SelectItem,
  Card,
  CardBody,
  CardHeader,
  Divider,
  Progress
} from "@heroui/react";
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from "recharts";
import { Sparkles, Brain, Target, Calendar, CheckCircle2, ChevronRight, Loader2 } from "lucide-react";

// Mock Data for the chart
const progressData = [
  { day: 'Mon', progress: 10, hours: 1.5 },
  { day: 'Tue', progress: 25, hours: 3 },
  { day: 'Wed', progress: 35, hours: 2.5 },
  { day: 'Thu', progress: 60, hours: 5 },
  { day: 'Fri', progress: 55, hours: 4 },
  { day: 'Sat', progress: 85, hours: 7 },
  { day: 'Sun', progress: 95, hours: 3 },
];

export default function RecommendationDashboard() {
  const [department, setDepartment] = useState("");
  const [semester, setSemester] = useState("");
  const [goal, setGoal] = useState("");
  
  const [isGenerating, setIsGenerating] = useState(false);
  const [recommendation, setRecommendation] = useState(null);

  const handleGenerate = (e) => {
    e.preventDefault();
    if (!department || !semester || !goal) return;

    setIsGenerating(true);
    setRecommendation(null);

    // Simulate AI processing time
    setTimeout(() => {
      setRecommendation({
        title: `AI Pathway: ${goal}`,
        focusSkills: ["React Ecosystem", "Node.js Architecture", "PostgreSQL", "System Design"],
        actions: [
          "Complete Advanced React module by end of week.",
          "Build a full-stack REST API with Node and Express.",
          "Integrate JWT authentication into your ongoing project."
        ],
        milestone: "Deploy your first monolithic full-stack app by Week 4."
      });
      setIsGenerating(false);
    }, 2500);
  };

  const departments = [
    { label: "Computer Science", value: "cs" },
    { label: "Business Administration", value: "business" },
    { label: "Science & Engineering", value: "science" },
  ];

  const semesters = Array.from({ length: 8 }, (_, i) => ({
    label: `${i + 1}${i === 0 ? 'st' : i === 1 ? 'nd' : i === 2 ? 'rd' : 'th'} Semester`,
    value: (i + 1).toString()
  }));

  return (
    <div className="w-full max-w-6xl mx-auto py-12 px-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
          Interactive AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-teal-400">Recommendation</span> Dashboard
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto">
          Tell our AI engine where you are and where you want to go. We'll generate a personalized, step-by-step roadmap tailored specifically for you.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Form & Chart */}
        <div className="lg:col-span-7 flex flex-col gap-8">
          
          {/* Input Form Card */}
          <Card className="bg-slate-900 border border-slate-800 shadow-xl shadow-indigo-500/5">
            <CardHeader className="flex gap-3 px-6 pt-6 pb-4">
              <div className="p-2 bg-indigo-500/20 rounded-lg">
                <Brain className="w-6 h-6 text-indigo-400" />
              </div>
              <div className="flex flex-col">
                <p className="text-lg font-bold text-white">Student Profile</p>
                <p className="text-sm text-slate-400">Configure your learning parameters</p>
              </div>
            </CardHeader>
            <Divider className="bg-slate-800/50" />
            <CardBody className="px-6 py-6">
              <form onSubmit={handleGenerate} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <Select 
                    label="Department" 
                    placeholder="Select Department"
                    className="max-w-full"
                    variant="bordered"
                    classNames={{
                      trigger: "border-slate-700 bg-slate-950/50 hover:bg-slate-900 data-[hover=true]:border-indigo-500 text-white",
                      listbox: "bg-slate-900 text-white",
                    }}
                    selectedKeys={department ? [department] : []}
                    onChange={(e) => setDepartment(e.target.value)}
                  >
                    {departments.map((dept) => (
                      <SelectItem key={dept.value} value={dept.value} className="text-slate-200">
                        {dept.label}
                      </SelectItem>
                    ))}
                  </Select>

                  <Select 
                    label="Current Semester" 
                    placeholder="Select Semester"
                    className="max-w-full"
                    variant="bordered"
                    classNames={{
                      trigger: "border-slate-700 bg-slate-950/50 hover:bg-slate-900 data-[hover=true]:border-indigo-500 text-white",
                      listbox: "bg-slate-900 text-white",
                    }}
                    selectedKeys={semester ? [semester] : []}
                    onChange={(e) => setSemester(e.target.value)}
                  >
                    {semesters.map((sem) => (
                      <SelectItem key={sem.value} value={sem.value} className="text-slate-200">
                        {sem.label}
                      </SelectItem>
                    ))}
                  </Select>
                </div>

                <Input 
                  type="text" 
                  label="Career Goal" 
                  placeholder="e.g. Full Stack Developer, Data Scientist..."
                  variant="bordered"
                  value={goal}
                  onChange={(e) => setGoal(e.target.value)}
                  classNames={{
                    inputWrapper: "border-slate-700 bg-slate-950/50 hover:bg-slate-900 data-[hover=true]:border-indigo-500",
                    input: "text-white"
                  }}
                />

                <Button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-indigo-600 to-teal-500 text-white font-bold py-6 mt-2 shadow-lg shadow-teal-500/20"
                  endContent={isGenerating ? <Loader2 className="w-5 h-5 animate-spin" /> : <Sparkles className="w-5 h-5" />}
                  isDisabled={!department || !semester || !goal || isGenerating}
                >
                  {isGenerating ? "Analyzing Profile..." : "Generate AI Roadmap"}
                </Button>
              </form>
            </CardBody>
          </Card>

          {/* Recharts Area Chart */}
          <Card className="bg-slate-900 border border-slate-800 shadow-xl overflow-visible">
            <CardHeader className="flex justify-between items-center px-6 pt-6 pb-2">
              <div className="flex gap-3 items-center">
                <div className="p-2 bg-teal-500/20 rounded-lg">
                  <Target className="w-5 h-5 text-teal-400" />
                </div>
                <p className="text-lg font-bold text-white">Weekly Study Progress</p>
              </div>
            </CardHeader>
            <CardBody className="px-2 pb-6 pt-2 h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={progressData} margin={{ top: 10, right: 30, left: -20, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorProgress" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#2dd4bf" stopOpacity={0.6}/>
                      <stop offset="95%" stopColor="#2dd4bf" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorHours" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#6366f1" stopOpacity={0.6}/>
                      <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
                  <XAxis 
                    dataKey="day" 
                    stroke="#94a3b8" 
                    fontSize={12} 
                    tickLine={false}
                    axisLine={false}
                  />
                  <YAxis 
                    stroke="#94a3b8" 
                    fontSize={12} 
                    tickLine={false}
                    axisLine={false}
                  />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '12px', color: '#f8fafc' }}
                    itemStyle={{ color: '#e2e8f0' }}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="progress" 
                    stroke="#2dd4bf" 
                    strokeWidth={3}
                    fillOpacity={1} 
                    fill="url(#colorProgress)" 
                    name="Progress %"
                  />
                  <Area 
                    type="monotone" 
                    dataKey="hours" 
                    stroke="#6366f1" 
                    strokeWidth={3}
                    fillOpacity={1} 
                    fill="url(#colorHours)" 
                    name="Study Hours"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </CardBody>
          </Card>

        </div>

        {/* Right Column: AI Output Pathway */}
        <div className="lg:col-span-5 h-full">
          <Card className={`h-full bg-slate-900 border shadow-2xl transition-all duration-500 ${
            recommendation ? "border-teal-500/50 shadow-teal-500/10" : "border-slate-800"
          }`}>
            <CardHeader className="flex flex-col items-start px-6 pt-8 pb-4">
              <div className="flex items-center gap-3 w-full border-b border-slate-800 pb-4 mb-2">
                <div className={`p-2.5 rounded-xl ${recommendation ? "bg-teal-500/20" : "bg-slate-800"}`}>
                  <Calendar className={`w-6 h-6 ${recommendation ? "text-teal-400" : "text-slate-500"}`} />
                </div>
                <h3 className="text-xl font-bold text-white">AI Study Pathway</h3>
              </div>
            </CardHeader>
            <CardBody className="px-6 py-2 flex flex-col h-full">
              
              {isGenerating ? (
                <div className="flex flex-col items-center justify-center h-full gap-4 text-slate-400 min-h-[300px]">
                  <Loader2 className="w-10 h-10 animate-spin text-indigo-400" />
                  <p className="animate-pulse">Synthesizing global learning data...</p>
                </div>
              ) : recommendation ? (
                <div className="flex flex-col gap-6 animate-fade-in">
                  
                  <div>
                    <h4 className="text-sm font-semibold text-teal-400 uppercase tracking-wider mb-3">Focus Skills</h4>
                    <div className="flex flex-wrap gap-2">
                      {recommendation.focusSkills.map((skill, idx) => (
                        <span key={idx} className="px-3 py-1 bg-slate-800 border border-slate-700 text-slate-200 text-sm rounded-full">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-indigo-400 uppercase tracking-wider mb-3">Recommended Actions</h4>
                    <div className="flex flex-col gap-3">
                      {recommendation.actions.map((action, idx) => (
                        <div key={idx} className="flex gap-3 items-start bg-slate-950/50 p-3 rounded-lg border border-slate-800/80">
                          <CheckCircle2 className="w-5 h-5 text-teal-500 shrink-0 mt-0.5" />
                          <p className="text-sm text-slate-300 leading-relaxed">{action}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-auto pt-6">
                    <div className="bg-gradient-to-r from-indigo-900/40 to-teal-900/40 border border-indigo-500/30 p-5 rounded-xl">
                      <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Weekly Milestone</h4>
                      <p className="text-white font-medium flex items-center gap-2">
                        {recommendation.milestone}
                        <ChevronRight className="w-4 h-4 text-teal-400" />
                      </p>
                    </div>
                  </div>

                </div>
              ) : (
                <div className="flex flex-col items-center justify-center h-full min-h-[300px] text-center gap-4 text-slate-500">
                  <div className="w-20 h-20 rounded-full border border-dashed border-slate-700 flex items-center justify-center bg-slate-900/50">
                    <Brain className="w-8 h-8 text-slate-600 opacity-50" />
                  </div>
                  <div>
                    <p className="font-medium text-slate-400">Awaiting input</p>
                    <p className="text-sm mt-1 max-w-xs mx-auto">Fill out the form and generate to see your customized AI roadmap here.</p>
                  </div>
                </div>
              )}

            </CardBody>
          </Card>
        </div>

      </div>
    </div>
  );
}
