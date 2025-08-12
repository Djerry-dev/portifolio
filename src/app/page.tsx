import React from "react"; import type { NextPage } from "next"; import Image from "next/image"; import { AppBar, Toolbar, IconButton, Container, Card, CardContent, Typography, Chip, Button, Avatar, Box, Grid, Link as MuiLink, } from "@mui/material"; import MenuIcon from "@mui/icons-material/Menu"; import GitHubIcon from "@mui/icons-material/GitHub"; import LinkedInIcon from "@mui/icons-material/LinkedIn"; import EmailIcon from "@mui/icons-material/Email"; import RocketLaunchIcon from "@mui/icons-material/RocketLaunch"; import { motion } from "framer-motion";

// -------------------------------------------------------------------------------- // Página de portfólio (Next.js + TailwindCSS + MUI + Framer Motion) // - Arquivo: pages/index.tsx // - Inclui: header, hero, skills, projetos, timeline (experiência), contato // - Personalize imagens e textos conforme necessário. // --------------------------------------------------------------------------------

const projects = [ { title: "Olaba - Plataforma de Conexão", description: "Marketplace B2C para conectar clientes e profissionais com agendamento, avaliação e pagamentos integrados.", tags: ["Next.js", "Tailwind", "Stripe", "TypeScript"], repo: "#", live: "#", image: "/images/project-olaba.jpg", }, { title: "Painel Admin - Syntay Dashboard", description: "Dashboard de métricas em tempo real com caching e otimizações para dados intensivos.", tags: ["React", "MUI", "WebSockets", "Redis"], repo: "#", live: "#", image: "/images/project-dashboard.jpg", }, { title: "App Mobile - Connect", description: "Protótipo React Native para agendamento e chat entre profissionais e clientes.", tags: ["React Native", "Expo", "Zustand"], repo: "#", live: "#", image: "/images/project-mobile.jpg", }, ];

const skills = [ "Next.js", "React", "TypeScript", "Tailwind CSS", "Material UI", "Framer Motion", "Node.js", "Express", "MySQL / SQLite", "Zustand", "Formik / Yup", "Testing (basic)", ];

const MotionBox = motion(Box);

const Home: NextPage = () => { return ( <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white text-gray-900"> {/* AppBar */} <AppBar position="sticky" elevation={0} className="bg-white/80 backdrop-blur"> <Toolbar className="container mx-auto flex items-center justify-between"> <Box className="flex items-center gap-3"> <Avatar sx={{ bgcolor: "#0ea5a4" }}>P</Avatar> <Typography variant="h6" component="div" className="font-semibold"> Pishelin </Typography> <Chip label="3 anos" size="small" className="ml-3" /> </Box>

<Box className="hidden md:flex gap-4 items-center">
        <MuiLink href="#projects" underline="none">
          <Button size="small">Projetos</Button>
        </MuiLink>
        <MuiLink href="#skills" underline="none">
          <Button size="small">Skills</Button>
        </MuiLink>
        <MuiLink href="#contact" underline="none">
          <Button variant="contained" size="small" startIcon={<EmailIcon />}>Contato</Button>
        </MuiLink>

        <IconButton aria-label="github" size="small">
          <GitHubIcon />
        </IconButton>
        <IconButton aria-label="linkedin" size="small">
          <LinkedInIcon />
        </IconButton>
      </Box>

      <IconButton edge="end" className="md:hidden">
        <MenuIcon />
      </IconButton>
    </Toolbar>
  </AppBar>

  <main className="container mx-auto py-16 px-6">
    {/* Hero */}
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-16">
      <MotionBox
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Typography variant="h3" component="h1" className="text-4xl md:text-5xl font-extrabold leading-tight">
          Olá, eu sou <span className="text-teal-500">Pishelin</span> — Front-end Engineer
        </Typography>

        <Typography className="mt-4 text-lg text-gray-600 max-w-xl">
          Crio interfaces limpas e experiências interativas com Next.js, Tailwind e Material UI.
          Tenho 3 anos de experiência construindo produtos usados por milhares de usuários — foco em
          desempenho, acessibilidade e componentes reutilizáveis.
        </Typography>

        <div className="mt-6 flex flex-wrap gap-3">
          <Button variant="contained" startIcon={<RocketLaunchIcon />} className="shadow-lg">
            Ver Projetos
          </Button>
          <Button variant="outlined">Baixar CV</Button>
        </div>

        <div className="mt-8 flex gap-3 items-center">
          <Avatar alt="Pishelin" src="/images/avatar.jpg" sx={{ width: 64, height: 64 }} />
          <div>
            <Typography className="font-semibold">Pishelin • Front-end</Typography>
            <Typography className="text-sm text-gray-500">Next.js / React / Tailwind / MUI</Typography>
          </div>
        </div>
      </MotionBox>

      <MotionBox
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="flex justify-center"
      >
        <div className="relative w-full max-w-md rounded-2xl overflow-hidden shadow-2xl">
          {/* Placeholder image - replace with a screenshot of your best project */}
          <Image src="/images/hero-screenshot.jpg" alt="screenshot" width={800} height={520} className="object-cover" />
        </div>
      </MotionBox>
    </section>

    {/* Skills + Stats */}
    <section id="skills" className="mb-16">
      <MotionBox initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
        <Typography variant="h5" className="font-bold mb-6">Skills & Ferramentas</Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <Card className="rounded-2xl">
              <CardContent>
                <div className="flex flex-wrap gap-3">
                  {skills.map((s) => (
                    <Chip key={s} label={s} variant="outlined" className="py-2" />
                  ))}
                </div>

                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div>
                    <Typography className="text-xs text-gray-500">Interfaces entregues</Typography>
                    <Typography variant="h6" className="font-bold">30+</Typography>
                  </div>
                  <div>
                    <Typography className="text-xs text-gray-500">Usuários impactados</Typography>
                    <Typography variant="h6" className="font-bold">10K+</Typography>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card className="rounded-2xl p-6 text-center">
              <CardContent>
                <Typography className="text-sm text-gray-500">Experiência</Typography>
                <Typography variant="h4" className="font-extrabold">3 anos</Typography>
                <Typography className="mt-3 text-sm text-gray-600">Foco em produtos web, componentes e integração com back-end.</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </MotionBox>
    </section>

    {/* Projects */}
    <section id="projects" className="mb-20">
      <Typography variant="h5" className="font-bold mb-6">Projetos em destaque</Typography>

      <Grid container spacing={4}>
        {projects.map((p) => (
          <Grid item xs={12} md={4} key={p.title}>
            <MotionBox whileHover={{ y: -6 }} className="h-full">
              <Card className="h-full rounded-3xl overflow-hidden shadow-md">
                <div className="relative h-40 w-full">
                  <Image src={p.image} alt={p.title} fill className="object-cover" />
                </div>
                <CardContent>
                  <Typography variant="h6" className="font-semibold">{p.title}</Typography>
                  <Typography className="text-sm text-gray-600 mt-2">{p.description}</Typography>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <Chip key={t} label={t} size="small" />
                    ))}
                  </div>

                  <div className="mt-4 flex gap-3">
                    <Button size="small" href={p.live} target="_blank">Ver</Button>
                    <Button size="small" href={p.repo} target="_blank" startIcon={<GitHubIcon />}>Código</Button>
                  </div>
                </CardContent>
              </Card>
            </MotionBox>
          </Grid>
        ))}
      </Grid>
    </section>

    {/* Timeline / Experience */}
    <section className="mb-20">
      <Typography variant="h5" className="font-bold mb-6">Linha do tempo — Experiência</Typography>

      <div className="space-y-6">
        <MotionBox initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <Card className="rounded-2xl p-4">
            <div className="flex items-start gap-4">
              <div className="flex flex-col items-center">
                <div className="w-3 h-3 rounded-full bg-teal-500 mt-1" />
                <div className="w-px bg-gray-200 h-full" />
              </div>
              <div>
                <Typography className="font-semibold">Front-end Developer — Syntay</Typography>
                <Typography className="text-sm text-gray-500">Jan 2024 — Presente</Typography>
                <Typography className="mt-2 text-sm text-gray-600">Trabalhei em painéis administrativos, integrações com APIs e otimizações de performance para aplicações em Next.js.</Typography>
              </div>
            </div>
          </Card>
        </MotionBox>

        <MotionBox initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <Card className="rounded-2xl p-4">
            <div className="flex items-start gap-4">
              <div className="flex flex-col items-center">
                <div className="w-3 h-3 rounded-full bg-teal-500 mt-1" />
                <div className="w-px bg-gray-200 h-full" />
              </div>
              <div>
                <Typography className="font-semibold">Freelance & Projetos Pessoais</Typography>
                <Typography className="text-sm text-gray-500">2022 — 2024</Typography>
                <Typography className="mt-2 text-sm text-gray-600">Conceitos de produto, prototipagem e entregas rápidas com ênfase em interfaces acessíveis e responsivas.</Typography>
              </div>
            </div>
          </Card>
        </MotionBox>
      </div>
    </section>

    {/* Contact */}
    <section id="contact" className="mb-20">
      <Typography variant="h5" className="font-bold mb-6">Vamos trabalhar juntos?</Typography>

      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={6}>
          <Card className="rounded-2xl p-6">
            <CardContent>
              <Typography className="font-semibold">Fale comigo</Typography>
              <Typography className="text-sm text-gray-600 mt-1">Disponível para projetos freelance ou posições em tempo integral.</Typography>

              <div className="mt-4 flex flex-col gap-3">
                <Button variant="contained" startIcon={<EmailIcon />} href="mailto:seu-email@exemplo.com">Enviar e‑mail</Button>
                <Button variant="outlined" startIcon={<LinkedInIcon />} href="#">Perfil LinkedIn</Button>
                <Button variant="outlined" startIcon={<GitHubIcon />} href="#">Ver GitHub</Button>
              </div>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card className="rounded-2xl p-6">
            <CardContent>
              <Typography className="font-semibold">Mensagem rápida</Typography>
              <form className="mt-4 flex flex-col gap-3">
                <input className="border rounded-md p-3" placeholder="Seu nome" />
                <input className="border rounded-md p-3" placeholder="Seu e‑mail" />
                <textarea className="border rounded-md p-3 h-28" placeholder="Como posso ajudar?" />
                <Button type="submit" variant="contained">Enviar</Button>
              </form>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </section>

    {/* Footer */}
    <footer className="py-10 text-center text-sm text-gray-500">
      <Typography>© {new Date().getFullYear()} Pishelin. Feito com ❤️ — Next.js, Tailwind e MUI.</Typography>
    </footer>
  </main>
</div>

); };

export default Home;


