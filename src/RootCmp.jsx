import { BirthdaysList } from './cmps/BirthdaysList';
import data from './data'
export function RootCmp() {
  return (
    <main>
      <section className='container'>
        <BirthdaysList data={data} />
      </section>
    </main>
  )
}

