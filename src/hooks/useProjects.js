import { useMemo, useState } from "react";
import { projectsData } from "../data/portfolioData";

export const useProjects = () => {
  const projects = useMemo(() => {
    return (projectsData || []).map((project, index) => {
      const id = project?.id || `${project?.title || "project"}-${index}`
      return {
        ...project,
        id,
        techStack: Array.isArray(project?.techStack) ? project.techStack : [],
      }
    })
  }, [])

  return { projects, loading: false, error: null };
};

export const useProjectFilters = (projects = []) => {
  const [filters, setFilters] = useState({
    search: "",
    category: "All",
    sortBy: "newest",
    view: "grid",
  });

  const filteredProjects = useMemo(() => {
    return projects
      .filter((project) => {
        const title = project?.title || ""
        const description = project?.description || ""
        const search = filters.search.toLowerCase()

        const matchesSearch =
          title.toLowerCase().includes(search) ||
          description.toLowerCase().includes(search);

        const matchesCategory =
          filters.category === "All" ||
          (Array.isArray(project?.techStack)
            ? project.techStack.includes(filters.category)
            : false);

        return matchesSearch && matchesCategory;
      })
      .sort((a, b) => {
        switch (filters.sortBy) {
          case "newest":
            return new Date(b.date || 0) - new Date(a.date || 0);
          case "oldest":
            return new Date(a.date || 0) - new Date(b.date || 0);
          case "name-asc":
            return a.title.localeCompare(b.title);
          case "name-desc":
            return b.title.localeCompare(a.title);
          default:
            return 0;
        }
      });
  }, [projects, filters]);

  const categories = useMemo(() => {
    const allCategories = new Set(projects.flatMap((p) => p.techStack));
    return ["All", ...Array.from(allCategories)].sort();
  }, [projects]);

  const updateFilter = (key, value) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return {
    filteredProjects,
    categories,
    filters,
    updateFilter,
  };
};
