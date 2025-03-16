import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github,Globe, Mail, BookOpen, Award, Users, Linkedin, Database, ChevronDown, Mic, GraduationCap,Newspaper } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
// データファイルからのインポート
import { profileData } from "@/lib/data/profile"
import { researchPapers } from "@/lib/data/research"
import { internships, activities } from "@/lib/data/activities"
import { educationItems } from "@/lib/data/background"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* ヘッダー */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <div className="mr-4 hidden md:flex">
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <span className="font-bold text-xl">{profileData.name}</span>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link href="#about" className="transition-colors hover:text-foreground/80">
                About
              </Link>
              <Link href="#research" className="transition-colors hover:text-foreground/80">
                Research
              </Link>
              <Link href="#background" className="transition-colors hover:text-foreground/80">
                Career
              </Link>
              <Link href="#internships" className="transition-colors hover:text-foreground/80">
                Internships
              </Link>
              <Link href="#activities" className="transition-colors hover:text-foreground/80">
                Activities
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* プロフィールセクション */}
        <section id="about" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              {/* プロフィール写真 */}
              <div className="w-full md:w-1/3 flex justify-center">
                <div className="relative w-64 h-64 overflow-hidden rounded-full border-4 border-primary/20 shadow-xl">
                  <Image
                    src={profileData.profileImage}
                    alt="プロフィール写真"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
              
              {/* プロフィール情報 */}
              <div className="w-full md:w-2/3 space-y-6">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">{profileData.name}</h2>
                  <p className="text-xl text-muted-foreground">{profileData.tagline}</p>
                </div>
                
                {/* 所属情報 */}
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">所属</h3>
                  <p className="text-muted-foreground">
                    {profileData.affiliation}
                  </p>
                </div>
                
                {/* 連絡先 */}
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">連絡先</h3>
                  <p className="text-muted-foreground">
                    Email: <a href={`mailto:${profileData.email}`} className="text-primary hover:underline">{profileData.email}</a>
                  </p>
                </div>
                
                {/* リンク */}
                <div className="flex space-x-4 pt-2">
                  {profileData.socialLinks.github && (
                    <a 
                      href={profileData.socialLinks.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
                    >
                      <Github className="sm:mr-2 h-4 w-4" />
                      <span className="hidden sm:inline">GitHub</span>
                    </a>
                  )}
                  {profileData.socialLinks.x && (
                    <a 
                      href={profileData.socialLinks.x} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="sm:mr-2 h-4 w-4"><path d="M4 4l11.733 16h4.267l-11.733 -16z"/><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"/></svg>
                      <span className="hidden sm:inline">X</span>
                    </a>
                  )}
                  {profileData.socialLinks.linkedin && (
                    <a 
                      href={profileData.socialLinks.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
                    >
                      <Linkedin className="sm:mr-2 h-4 w-4" />
                      <span className="hidden sm:inline">LinkedIn</span>
                    </a>
                  )}
                  {profileData.socialLinks.other && profileData.socialLinks.other.map((link, index) => (
                    <a 
                      key={index}
                      href={link.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
                    >
                      {link.icon === "Newspaper" && <Newspaper className="sm:mr-2 h-4 w-4" />}
                      {link.icon === "Globe" && <Globe className="sm:mr-2 h-4 w-4" />}
                      {!link.icon && <Globe className="sm:mr-2 h-4 w-4" />}
                      <span className="hidden sm:inline">{link.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 研究業績セクション */}
        <section id="research" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Research</h2>
                {/* <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  これまでの研究業績と発表論文の一部をご紹介します。
                </p> */}
              </div>
            </div>
            <div className="mx-auto max-w-5xl mt-8">
              {/* 論文リスト（タイムライン形式） */}
              <div className="relative border-l-2 border-primary/30 pl-6 ml-4 md:ml-[120px] space-y-10">
                {researchPapers.map((paper, index) => (
                  <div key={index} className="relative">
                    {/* タイムラインのドット */}
                    <div className="absolute w-4 h-4 bg-primary rounded-full -left-[30px] top-2"></div>
                    
                    {/* 期間表示（デスクトップ） */}
                    <div className="hidden md:block absolute -left-[125px] top-0 w-[90px] text-right text-muted-foreground font-medium">
                      {paper.period}
                    </div>
                    
                    {/* 期間表示（モバイル） */}
                    <div className="md:hidden text-muted-foreground font-medium mb-2">
                      {paper.period}
                    </div>
                    
                    <Card>
                      <CardContent className="p-6">
                        <div className="flex flex-col gap-2">
                          <div className="relative">
                            <div className="flex justify-between items-start">
                              <h3 className="font-bold text-xl pr-20">
                                {paper.pageLink && paper.pageLink !== "#" && paper.pageLink !== "" ? (
                                  <Link href={paper.pageLink} target="_blank" rel="noreferrer" className="hover:underline hover:text-primary transition-colors">
                                    {paper.title}
                                  </Link>
                                ) : (
                                  paper.title
                                )}
                              </h3>
                              {paper.peerReviewed && (
                                <Badge variant="outline" className="border-primary text-primary whitespace-nowrap absolute top-0 right-0">
                                  査読あり
                                </Badge>
                              )}
                            </div>
                            <p className="text-muted-foreground mt-1">{paper.conference}</p>
                          </div>
                          {paper.description && (
                            <p className="mt-2">{paper.description}</p>
                          )}
                          {/* ボタンがある場合のみマージンを適用 */}
                          {(
                            (paper.paperLink && paper.paperLink !== "#" && paper.paperLink !== "") ||
                            (paper.codeLink && paper.codeLink !== "#" && paper.codeLink !== "") ||
                            (paper.ModelLinks && paper.ModelLinks.length > 0)
                          ) && (
                            <div className="flex items-center gap-2 mt-4">
                              {paper.paperLink && paper.paperLink !== "#" && paper.paperLink !== "" && (
                                <Button size="sm" variant="outline" asChild>
                                  <Link href={paper.paperLink} target="_blank" rel="noreferrer">
                                    <BookOpen className="mr-2 h-4 w-4" />
                                    論文を読む
                                  </Link>
                                </Button>
                              )}
                              {paper.codeLink && paper.codeLink !== "#" && paper.codeLink !== "" && (
                                <Button size="sm" variant="outline" asChild>
                                  <Link href={paper.codeLink} target="_blank" rel="noreferrer">
                                    <Github className="mr-2 h-4 w-4" />
                                    コード
                                  </Link>
                                </Button>
                              )}
                              {paper.ModelLinks && paper.ModelLinks.length > 0 && (
                                <div className="relative group">
                                  <Button size="sm" variant="outline">
                                    <Database className="mr-2 h-4 w-4" />
                                    モデル
                                    <ChevronDown className="ml-1 h-3 w-3" />
                                  </Button>
                                  <div className="absolute left-0 mt-1 w-48 rounded-md shadow-lg bg-background border border-border hidden group-hover:block z-10">
                                    <div className="py-1">
                                      {paper.ModelLinks.map((model, idx) => (
                                        <Link 
                                          key={idx} 
                                          href={model.url} 
                                          target="_blank" 
                                          rel="noreferrer"
                                          className="block px-4 py-2 text-sm hover:bg-muted"
                                        >
                                          {model.name}
                                        </Link>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 学歴と職歴セクション */}
        <section id="background" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Career</h2>
              </div>
            </div>
            <div className="mx-auto max-w-3xl space-y-8 mt-8">
              {educationItems.map((item, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-muted-foreground/20">
                  <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px]"></div>
                  <div className="mb-1 text-xl font-semibold">{item.institution} {item.degree}</div>
                  <p className="text-muted-foreground">{item.period}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* インターンシップセクション */}
        <section id="internships" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Internships</h2>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              {/* インターンリスト */}
              {internships.map((internship, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex flex-col gap-2">
                      <h3 className="font-bold text-xl">{internship.company}</h3>
                      <p className="text-muted-foreground">{internship.period}</p>
                      <p className="mt-2">{internship.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        {/* 活動セクション */}
        <section id="activities" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Activities</h2>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              {/* 活動リスト */}
              {activities.map((activity, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      {activity.icon === "Users" && <Users className="h-8 w-8 text-primary" />}
                      {activity.icon === "Award" && <Award className="h-8 w-8 text-primary" />}
                      {activity.icon === "Mic" && <Mic className="h-8 w-8 text-primary" />}
                      {activity.icon === "Github" && <Github className="h-8 w-8 text-primary" />}
                      {activity.icon === "BookOpen" && <BookOpen className="h-8 w-8 text-primary" />}
                      {activity.icon === "Globe" && <Globe className="h-8 w-8 text-primary" />}
                      {activity.icon === "GraduationCap" && <GraduationCap className="h-8 w-8 text-primary" />}
                      <h3 className="font-bold text-xl">{activity.title}</h3>
                    </div>
                    <ul className="space-y-3">
                      {activity.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex flex-col">
                          {item.url ? (
                            <Link 
                              href={item.url} 
                              target="_blank" 
                              rel="noreferrer" 
                              className="font-medium hover:underline hover:text-primary transition-colors"
                            >
                              {item.name}
                            </Link>
                          ) : (
                            <span className="font-medium">{item.name}</span>
                          )}
                          {item.detail && (
                            <span className="text-muted-foreground">{item.detail}</span>
                          )}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* フッター */}
      <footer className="w-full border-t py-6 md:py-0 bg-muted">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © {new Date().getFullYear()} Chihiro Yano. All rights reserved. 
          </p>
        </div>
      </footer>
    </div>
  )
}

