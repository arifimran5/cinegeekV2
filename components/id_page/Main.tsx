'use client'

import { Content } from '@/utils/types'
import Container from '../Container'
import Image from 'next/image'
import { getRunningTime } from '@/utils/helper'
import { usePathname } from 'next/navigation'

export default function Main({ data }: { data: Content }) {
  const pathName = usePathname()
  const isMoviePage = pathName.startsWith('/movie')
  let poster = `https://image.tmdb.org/t/p/w300_and_h450_bestv2${data.poster_path}`
  let backdrop = `https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${data.backdrop_path}`
  const release_date = isMoviePage
    ? new Date(data.release_date)
    : new Date(data.first_air_date as string)

  const usaFormat = Intl.NumberFormat('en-us')
  const userScore = Math.round((data.vote_average / 10) * 100)
  const title = isMoviePage ? data.title : data.name

  return (
    <main>
      <div className='relative bg-gray-950/80'>
        <div
          style={{ backgroundImage: `url(${backdrop})` }}
          className='absolute inset-0 bg-center bg-no-repeat bg-cover -z-10 '
        ></div>
        <Container className='flex flex-col items-center gap-4 py-4 text-white md:mt-4 md:items-start md:flex-row sm:gap-8'>
          <div className='min-w-[18em]'>
            <Image
              className='rounded-md'
              src={poster}
              width={300}
              height={450}
              alt={`Poster of ${title}`}
            />
          </div>
          <section className='mt-5 space-y-5 md:w-max'>
            <section>
              <h1 className='text-2xl font-bold text-primary-foreground dark:text-primary'>
                {title}
                <span className='pl-1 font-normal text-gray-500'>
                  ({release_date.getFullYear()})
                </span>
              </h1>

              <div className='flex flex-col mt-1 sm:gap-8 sm:items-center sm:flex-row text-secondary dark:text-secondary-foreground'>
                <div className='space-x-2'>
                  {data.genres?.splice(0, 3).map((gen) => (
                    <span key={gen.id}>{gen.name}</span>
                  ))}
                </div>
                {isMoviePage && (
                  <p>
                    {release_date.getDate()}/{release_date.getMonth()}/
                    {release_date.getFullYear()}
                  </p>
                )}
                <p>{getRunningTime(data?.runtime)}</p>
              </div>
            </section>

            <p className='italic text-secondary dark:text-secondary-foreground '>
              {data.tagline}
            </p>

            <div className='max-w-[20em] md:max-w-full'>
              <h2 className='text-lg font-medium text-primary-foreground dark:text-primary'>
                Overview
              </h2>
              <p className='text-secondary md:max-w-full dark:text-secondary-foreground'>
                {data.overview}
              </p>
            </div>
            <div className='flex flex-col sm:gap-4 sm:flex-row sm:items-center'>
              <p className='text-lg font-medium text-primary-foreground dark:text-primary'>
                User Score
              </p>
              <div className='flex items-center w-64 h-5 py-[2px] rounded-2xl bg-gray-900'>
                <div
                  style={{ marginRight: `${100 - userScore}%` }}
                  className='w-full h-full cursor-pointer rounded-2xl bg-accent'
                  title={`${userScore}%`}
                ></div>
              </div>
            </div>

            {isMoviePage && (
              <div className='flex items-center gap-5 text-primary-foreground dark:text-primary'>
                <p className='text-lg font-medium text-primary-foreground dark:text-primary'>
                  Budget:{' '}
                  <span className='text-base font-normal text-secondary dark:text-secondary-foreground'>
                    ${usaFormat.format(data.budget ? data.budget : 0)}
                  </span>
                </p>
                <p className='text-lg font-medium text-primary-foreground dark:text-primary'>
                  Revenue:{' '}
                  <span className='text-base font-normal text-secondary dark:text-secondary-foreground'>
                    ${usaFormat.format(data.revenue ? data.revenue : 0)}
                  </span>
                </p>
              </div>
            )}
            {!isMoviePage && (
              <div className='flex items-center gap-5 text-primary-foreground dark:text-primary'>
                <p className='text-lg font-medium text-primary-foreground dark:text-primary'>
                  Seasons:{' '}
                  <span className='text-base font-normal text-secondary dark:text-secondary-foreground'>
                    {data.number_of_seasons}
                  </span>
                </p>
                <p className='text-lg font-medium text-primary-foreground dark:text-primary'>
                  Episodes:{' '}
                  <span className='text-base font-normal text-secondary dark:text-secondary-foreground'>
                    {data.number_of_episodes}
                  </span>
                </p>
              </div>
            )}
          </section>
        </Container>
      </div>
    </main>
  )
}
