import { ReactNode } from "react"
import { cn } from "@/lib/utils"

type ContentArticleProps = {
  children: ReactNode
  className?: string
}

export function ContentArticle({ children, className }: ContentArticleProps) {
  return (
    <article
      className={cn(
        "prose prose-neutral dark:prose-invert prose-enhanced max-w-none prose-a:underline prose-a:text-blue-600 hover:prose-a:text-blue-700 dark:prose-a:text-blue-400 dark:hover:prose-a:text-blue-300 wrap-break-word",
        className
      )}
    >
      {children}
    </article>
  )
}
