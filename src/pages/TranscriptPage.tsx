import { AppShell } from '@/components/layout/AppShell'
import { PrintLink } from '@/components/ui/PrintLink'
import { PageHeader } from '@/components/ui/PageHeader'
import { TranscriptDocument } from '@/components/portal/TranscriptDocument'

export default function TranscriptPage() {
  return (
    <AppShell>
      <div className="space-y-6">
        <PageHeader title="Academic Transcript / السجل الأكاديمي" action={<PrintLink />} />

        <TranscriptDocument />
      </div>
    </AppShell>
  )
}
