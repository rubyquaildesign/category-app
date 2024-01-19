import type { PageServerLoad } from "./$types";
import { TOKEN, API } from '$env/static/private'
import fs from 'fs/promises'
import path from 'path'
import JSONdb from "simple-json-db";
import type { Responses } from "../data";
export const load: PageServerLoad = async ({fetch}) => {
  let fileExists = true;
  try {

    await fs.stat('./SavedData.json');
  } catch {
    fileExists = false;
  }
  let data: Responses
  if (fileExists) {
    data = JSON.parse(await fs.readFile('./SavedData.json','utf-8'))
  } else {
  const t = await fetch(API + 'constellations', {
    headers: {
      authorisation: TOKEN
    }
  })
  let j = await t.json();
  let a = j.results
  while (j.next) {
    const t = await fetch(j.next)
    j = await t.json();
    a = [...a, ...j.results];
  }
    fs.writeFile('./SavedData.json', JSON.stringify(a))
    data = a;
  }
  const itemMap = new Map<(typeof data)[number]['key_work']['id'], { id: number, title: string, type: string, time: string }>();
  const db = new JSONdb('./db.json');
  const nData = db.JSON();
  const r = data.map(cns => {
    cns.links.map(l => [l.start, l.end].map((it => {
      itemMap.set(it.id!, {
        id: it.id!,
        time: it.first_production_date ?? 'unknown',
        title: it.title!,
        type:it.type!
      })
    })))

    return {
      id:cns.id,
      name: cns.name,
      description: cns.description,
      items: [...new Set(cns.links.flatMap(l => [l.start.id, l.end.id
      ]))].map(id => itemMap.get(id))
    }
  })
  return {
    catData: r,
    startingData: nData
  }
}