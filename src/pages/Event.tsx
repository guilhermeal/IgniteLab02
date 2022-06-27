import { useState } from "react";
import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/Video";

export function Event() {
  const { slug } = useParams<{ slug: string }>();

  const [sidebarOpened, setSidebarOpened ] = useState(true);

  function handleOpenSidebar() {
    setSidebarOpened(!sidebarOpened);
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header
        onSidebarOpened={handleOpenSidebar}
      />
      <main className="flex flex-1">
        {
          slug 
          ? 
          <Video lessonSlug={slug} /> 
          : 
          <div className="flex-1" /> 
        }
        {(window.innerWidth>=1024 || sidebarOpened) && (
          <Sidebar />
        )}
      </main>
    </div>
  )
}
