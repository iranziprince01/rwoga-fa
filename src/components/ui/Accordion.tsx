import { useId, useState } from 'react'
import { Minus, Plus } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { cn } from '@/utils'

type Item = { question: string; answer: string }

type Props = {
  items: Item[]
  className?: string
}

export function Accordion({ items, className }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const baseId = useId()

  return (
    <div className={cn('divide-y divide-navy-900/10 border-y border-navy-900/10', className)}>
      {items.map((item, index) => {
        const isOpen = openIndex === index
        const panelId = `${baseId}-panel-${index}`
        const buttonId = `${baseId}-button-${index}`
        const Icon = isOpen ? Minus : Plus

        return (
          <div key={item.question}>
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                className="flex w-full items-center justify-between gap-4 py-5 text-left"
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <span className="font-display text-lg font-semibold text-navy-900">
                  {item.question}
                </span>
                <Icon className="h-5 w-5 shrink-0 text-navy-700" aria-hidden />
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.28, ease: 'easeOut' }}
                  className="overflow-hidden"
                >
                  <p className="pb-5 text-navy-800/75 leading-relaxed">{item.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}

export function FAQ({ items, className }: Props) {
  return <Accordion items={items} className={className} />
}
